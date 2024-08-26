const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const multer = require("multer");
const crypto = require("crypto");
const scanUsername = require("./helper/scanUsername");
const fs = require("fs");
const path = require("path");
const Buffer = require("buffer").Buffer;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// testMongoDB tries to see if the server can connect to the database
async function testMongoDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Confirmed connection to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

const app = express();
testMongoDB();

// allow cross-origin requests and automatically convert JSON to JS objects
app.use(
  cors({
    origin: ["http://localhost:3000", "https://3dhtml.vercel.app"],

    // allow cookies to be sent back to the client
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// multer will automatically determine if the formdata is an image and store it in the resources folder
// multer also sorts the images and the aframe code into separate objects (req.files vs req.body). note that the files in "images" are all file objects sharing the same key
const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, "resources/");
  },
});

const upload = multer({ storage: storage });
app.use(
  upload.fields([
    { name: "images", maxCount: Infinity },
    { name: "contribution", maxCount: Infinity },
  ])
);

// the contribute route inserts the user's project data into the database. in the client, the name will be autofilled with the username given
// by the user's cookie. there is no need for the server to autofill the name
app.post("/api/contribute", async (req, res) => {
  const { images } = req.files;
  const contribution = JSON.parse(req.body.contribution);

  // mongodb automatically converts the image buffer to binary with the Binary.createFromBase64() method (this is a bad thing)
  // in order to get around this, we manually convert the image buffer to base64 and store it in mongodb to use later when rebuffering and rewriting files back into the server
  let base64Images = [];

  // random characters is generated so image files don't overwrite each other
  const randomCharacters = crypto.randomBytes(20).toString("hex");

  if (images) {
    // generate image files for all images sent in the formdata
    for (let i = 0; i < images.length; i += 1) {
      fs.writeFile(
        `./resources/${images[i].originalname + randomCharacters}`,
        images[i].buffer,
        (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("File saved successfully!");
          }
        }
      );

      base64Images.push(images[i].buffer.toString("base64"));
    }

    // replace the src local path (which has its own folders and images) with server's image hosting url
    // note that there may be multiple image assets in the aframe code
    contribution.aframe = contribution.aframe.replace(
      /src="([^"]+)"/g,
      `src="${process.env.SERVER}/assets?filename="`
    );

    // the aframe code is split by filename= so we can later insert the image names between the split code
    // it is assumed that images in the image array are in the same order as the aframe code, (so we don't have id's mixed up)
    let aframeAssetsSplit = contribution.aframe.split("filename=");

    // for each image, insert the filename between the split aframe code. the number of images are the same as the number of filename='s that existed before the split
    for (let i = 0; i < images.length; i += 1) {
      aframeAssetsSplit.splice(
        i * 2 + 1,
        0,
        `filename=${images[i].originalname + randomCharacters}`
      );
    }

    contribution.aframe = aframeAssetsSplit.join("");
  }

  const projects = client
    .db(process.env.DATABASE)
    .collection(process.env.COLLECTION);

  await projects.insertOne({
    aframe: contribution.aframe,
    image: images,
    imageRandomCharacters: randomCharacters,
    base64Images: base64Images,
    metaData: {
      title: contribution.title,
      description: contribution.description,
      name: contribution.name,
      tags: contribution.tags,
    },
  });

  res.send({ result: "Received" });
});

// the explore route retrieves all projects from the database and sends it back to the client
app.get("/api/explore", async (req, res) => {
  const projects = client
    .db(process.env.DATABASE)
    .collection(process.env.COLLECTION);

  const allProjects = await projects.find({}).toArray();

  res.send({ projects: allProjects });
});

// the signup route creates a new user account in the database and sends back a cookie for the user
// the username must not have a forbidden word in it and is unique
app.post("/api/account/signup", async (req, res) => {
  const { username, password } = req.body;
  const users = client.db(process.env.DATABASE).collection("accounts");

  const scan = await scanUsername(users, username);
  if (scan.result !== "ok") return res.send({ result: scan.result });

  // create an authorization token for the user to use as part of their cookie
  const tokenAuthentication = crypto.randomBytes(16).toString("hex");

  await users.insertOne({
    username: username,
    password: password,
    tokenAuthentication: tokenAuthentication,
  });

  res.cookie(
    "accountAuthorization",
    JSON.stringify({
      username: username,
      tokenAuthentication: tokenAuthentication,
    }),
    {
      httpOnly: false,
      maxAge: 90000000,
      sameSite: "none",
      secure: true,
    }
  );

  res.send({ result: "Account Created" });
});

// the signin route signs in the user if they have a valid username and password and sends back a cookie for the user
app.post("/api/account/signin", async (req, res) => {
  const { username, password } = req.body;
  const accounts = client.db(process.env.DATABASE).collection("accounts");

  const user = await accounts.findOne({ username });
  if (user === null)
    return res.send({ result: "Incorrect username or password" });
  if (user.password !== password)
    return res.send({ result: "Incorrect username or password" });

  // if the user exists and the password is correct, create a cookie for the user
  if (user.password === password) {
    res.cookie(
      "accountAuthorization",
      JSON.stringify({
        username: username,
        tokenAuthentication: user.tokenAuthentication,
      }),
      {
        httpOnly: false,
        maxAge: 90000000,
        sameSite: "none",
        secure: true,
      }
    );

    return res.send({ result: "Signed In" });
  }
});

// the checkCookie route checks if the user has a cookie and if the cookie is valid with a valid token
app.get("/api/account/checkCookie", async (req, res) => {
  const accountAuthorization = req.cookies.accountAuthorization;

  if (accountAuthorization === undefined)
    return res.send({ result: "no cookie or cookie is not valid" });
  const { username, tokenAuthentication } = JSON.parse(accountAuthorization);

  const accounts = client.db(process.env.DATABASE).collection("accounts");
  const user = await accounts.findOne({ tokenAuthentication });

  if (user)
    return res.send({
      result: "exists",
      username: username,
      tokenAuthentication: tokenAuthentication,
    });

  return res.send({ result: "no cookie or cookie is not valid" });
});

// the deleteAccount route deletes the user account information from the database and clears the cookie from the client
app.get("/api/account/deleteAccount", async (req, res) => {
  const accountAuthorization = req.cookies.accountAuthorization;

  if (accountAuthorization === undefined)
    return res.send({
      result:
        "no cookie or cookie is not valid (it may have expired or been deleted)",
    });

  const { username, tokenAuthentication } = JSON.parse(accountAuthorization);
  res.clearCookie("accountAuthorization");

  const accounts = client.db(process.env.DATABASE).collection("accounts");
  const deletion = await accounts.deleteOne({ tokenAuthentication });

  if (deletion) return res.send({ result: "Account Deleted" });
  if (deletion === undefined)
    return res.send({
      result: "Account to delete does not exist, or longer exists.",
    });
});

// when a get request is made to this route, the server will send a buffer image back to the client. this buffer image acts the same
// as if the server is hosting the image
// ex: http://127.0.0.1:5000/assets?filename=55b3d6f5b968b5d670d5a60ef801c8a0.png
app.get("/assets", (req, res) => {
  const filename = req.query.filename;

  if (fs.existsSync(`./resources/${filename}`)) {
    fs.readFile(`./resources/${filename}`, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving image");
      } else {
        res.setHeader("Content-Type", "image/jpeg");
        res.send(data);
      }
    });
  }
});

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(5000, async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Server is running on port 5000");

  // the server will be able to reference images to host in the assets get request even if the server is restarted or fails
  // we use mongodb to store a base64 string of the image buffer and then write the image file into the server using the buffer
  const projects = client
    .db(process.env.DATABASE)
    .collection(process.env.COLLECTION);

  projects
    .find({})
    .toArray()
    .then((projects) => {
      projects.forEach((project) => {
        // if the project has an image, check if the image exists in the server already
        if (project.image) {
          for (let i = 0; i < project.image.length; i += 1) {
            let imageFileName =
              project.image[i].originalname + project.imageRandomCharacters;

            const base64String = project.base64Images[i];
            const buffer = Buffer.from(base64String, "base64");

            if (!fs.existsSync(`./resources/${imageFileName}`)) {
              fs.writeFile(`./resources/${imageFileName}`, buffer, (err) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log("File saved successfully!");
                }
              });
            }
          }
        }
      });
    });
});

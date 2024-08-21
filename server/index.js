const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const multer = require("multer");
const crypto = require("crypto");
const scanUsername = require("./helper/scanUsername");

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

// req.file is a property of the request object (req) in Express.js applications that contains information about an uploaded file. It is typically populated when a file is uploaded using the multer middleware.

// the contribute route inserts user project data into the database
app.post("/api/contribute", async (req, res) => {
  const { aframe, image, title, description, name, tags } = req.body;
  const projects = client
    .db(process.env.DATABASE)
    .collection(process.env.COLLECTION);

  // let uploadImages;
  // let generatedImageURL;

  // // uploadImage renders the image object from the client and turns it into a file in the server
  // if (image) {
  //   uploadImages = multer({ dest: "resources/" });

  //   for (let i = 0; i < image.length; i++) {
  //     generatedImageURL = `/resources/" + ${crypto
  //       .randomBytes(16)
  //       .toString("hex")}`;
  //   }
  // }

  await projects.insertOne({
    aframe: aframe,
    image: generatedImageURL,

    // imageBackup is created in case the server fails and the multer images that are stored in the server are lost
    imageBackup: image,
    metaData: {
      title: title,
      description: description,
      name: name,
      tags: tags,
    },
  });

  res.send({ result: "Received" });
});

// the explore route retrieves all projects from the database and sends it back to the client
// ideally, the client will not render all the projects at once, but use lazy loading to slowly display all projects
app.get("/api/explore", async (req, res) => {
  const projects = client
    .db(process.env.DATABASE)
    .collection(process.env.COLLECTION);

  const allProjects = await projects.find({}).toArray();

  res.send({ projects: allProjects });
});

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

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

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
    origin: ["http://localhost:3000"],

    // allow cookies to be sent back to the client
    credentials: true,
  })
);
app.use(bodyParser.json());

// the contribute route inserts user project data into the database
app.post("/api/contribute", async (req, res) => {
  const { aframe, image, title, description, name } = req.body;
  const projects = client
    .db(process.env.DATABASE)
    .collection(process.env.COLLECTION);

  await projects.insertOne({
    aframe,
    image,
    metaData: {
      title,
      description,
      name,
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

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

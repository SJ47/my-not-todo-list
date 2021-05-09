const bodyParser = require("body-parser");
const express = require("express");
const app = express();
// const parser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router");
const cors = require("cors");
require("dotenv").config();

// app.use(parser.json());  // deprecated - now use express built in parser as of express 4.16+
app.use(express.json()); //Used to parse JSON bodies instead of line above
app.use(cors());

const username = process.env.REACT_APP_DB_USER;
const password = process.env.REACT_APP_DB_KEY;

const uri = `mongodb+srv://${username}:${password}@cluster0.ugqf0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
        const db = client.db("tasks_hub");
        const tasksCollection = db.collection("tasks");
        const tasksRouter = createRouter(tasksCollection);
        app.use("/api/tasks", tasksRouter);
    })
    .catch(console.error);

app.listen(5000, function () {
    console.log(`Listening on port ${this.address().port}`);
});
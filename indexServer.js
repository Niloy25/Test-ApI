const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const apiV1Route = require("./routes/api.v1.route");

// Environment Variable Configuration
env.config();

// MongoDb Connection
const MongoURI = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@clustertest.snvzrr2.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;
mongoose
  .connect(MongoURI)
  .then(() => {
    console.log("Connected To Mongo Successfully");
  })
  .catch((error) => {
    console.log(error);
  });

// Express Middleware
app.use(cors());
app.use(express.json());
app.use("/api/v1", apiV1Route);
app.use("/public", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

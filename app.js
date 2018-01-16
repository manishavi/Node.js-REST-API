const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/index");

const mongoose = require("mongoose");
const config = require("./config/config.json");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Welcome App");
});

app.use("/api", routes);

mongoose.connect(config.MONGO_URI, () => {
  console.log("Connected to MongoDB");
});

app.listen("3000", () => {
  console.log("Application is running on PORT 3000");
});

"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require('./routes/index');
//import mongoose module
const mongoose = require('mongoose');
const config = require('./config/config.json');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.get("/", (req, res) => {
  console.log(req.userId);
  console.log(req.user);
  res.send("hello world");
});

app.use('/api', routes); //allthe backend routes will start from (/api)

//connect the app to mongoose
const promise = mongoose.connect(config.MONGO_URI, () => {
  console.log('App is connected to mongoDB');
  useMongoClient: true
});
//App is connected to mongoDB

app.listen(3000, () => {
  console.log('listening on port 3000');
})
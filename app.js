"use strict";
//import express
const express = require("express");
const bodyParser = require("body-parser");
//create express app
const app = express();

const routes = require('./routes/index');

//add the middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

//add custom middleware
app.use((req, res, next) => {
  //log the message, Custom middleware run
  req.userId = 1;
  req.user = 'Manisha Lal';
  console.log("Custom middleware run");
  //call the next middleware
  next();
});

app.get("/", (req, res) => {
  //set the root route
  console.log(req.userId);
  console.log(req.user);
  res.send("hello world");
});

app.use('/api', routes); //allthe backend routes will start from (/api)

app.listen(3000, () => {
  console.log('listening on port 3000');
})
"use strict";
//import express
const express = require("express");

//create express app
const app = express();

app.get("/", function(req, res) {
  //set the root route
  res.send("hello world");
  //send the message
});
//listen the express app on port 3000
app.listen(3000, () => {
  console.log('listening on port 3000');
})
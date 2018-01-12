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
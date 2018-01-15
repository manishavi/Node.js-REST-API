"use strict";
//import express
const express = require("express");

//create express app
const app = express();

app.get("/", function(req, res) {
  //set the root route
  res.send("hello world");
});
//create jobs object
//each object will have id, title,description and duration
const jobs = [
  {
    id: 1,
    title: "Node",
      description: "For backend",
      duration: "3 months"
    }, 
    {
      id: 2,
      title: "React",
      description: "For front-end",
      duration: "3 months"
    }, 
    {
      id: 3,
      title: 'Node-express',
      description: 'For server',
      duration: '3 months'
    }
]
//create jobs endpoint
app.get("/jobs", function (req, res) {
  res.json(jobs);
});
//return jobs to server


//listen the express app on port 3000
app.listen(3000, () => {
  console.log('listening on port 3000');
})
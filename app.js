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
      //return jobs to server
  res.json(jobs);
});

app.post("/jobs", (req, res, next) => {
  //create POST route /jobs
  //get the id, title, duration, description from request body
  let id = req.body.id;
  let title = req.body.title;
  let duration = req.body.duration;
  let description = req.body.description;
  //create new job object
  let job = {
    id,
    title,
    description,
    duration
  };
  //add object to jobs array
  jobs.push(job);
  //return jobs array to server
  if (!req.body) return res.sendStatus(400);
  return res.json(jobs);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
})
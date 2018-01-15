const jobs = require('../config/jobs');

module.exports = {
  create(req, res) {
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
  },
  findAll(req, res) {
    return res.json(jobs);
  }
};
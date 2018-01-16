const jobs = require('../config/jobs');
const Job = require('../models/job_model');

module.exports = {
  create(req, res) {
    let title = req.body.title;
    let duration = req.body.duration;
    let description = req.body.description;
    //make sure title is provided by user
    if(!title) {
      return res.json({status: 400, error:"title is required"});
    }
    //if title missing send error status 400
    let job = {
      title,
      description,
      duration
    };

    // jobs.push(job);
    // if (!req.body) return res.sendStatus(400);
    // return res.json(jobs);
    //create new instance of jobmodel
    //pass job object in constructor function
    const newJob = new Job(job);
    //save the job
    //when job saved successfully then send the new job
    //to the server with status code 200
    newJob.save(err => {
      if (err) {
        return res.json({ status: 500, error: err });
      }
      console.log('saved');
      re.json({ status: 500, newJob });
    })
  },
  findAll(req, res) {
    //call find() of JobModel
    Job.find({}, (err, jobs) => {
      if(err) {
        return res.json({ status: 404, error: err });
      }
      res.json({ status: 200, job });
    })
    //if err send err with 404
    //return all jobs to server with 200
  }
};
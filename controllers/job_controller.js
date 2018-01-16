const jobs = require('../config/jobs');
const Job = require('../models/job_model');

module.exports = {
  create(req, res) {
    let title = req.body.title;
    let duration = req.body.duration;
    let description = req.body.description;

    //make sure title is provided by the user
    if (!title) {
      //if title is missing then send badRequest error with 400 status
      return res.status(400).send({ err: "title is required property" });
    }

    let job = {
      title,
      description,
      duration
    };

    //create a new instance of Job model
    const newJob = new Job(job);
    //pass the job object in constructor function

    //save the job
    newJob.save(err => {
      if (err) {
        return res.status(500).send(err);
      }
    });

    return res.status(200).json(newJob);
  },
  findAll(req, res) {
    // call the find method of Job Model
    Job.find({}, (err, jobs) => {
      //if error occurred send error with 404 status code
      if (err) {
        return res.status(404).send(err);
      }
      //return all the jobs to the server with 200 status
      console.log(res.status(200).json(jobs));
    });
  },
  findOne(req, res) {
    //get the id from the req params
    let id = req.params.id;

    if (!id) {
      return res.status(400).send({ err: "id is required field" });
    }
    //find the job by id
    Job.findById(id, (err, job) => {
      //if err comes then send 404
      if (err) {
        return res.status(404).send(err);
      }

      //send the job as response
      return res.status(200).json(job);
    });
  },
  update(req, res) {
    //get id from req params
    let id = req.params.id;

    //get title from the req body
    let title = req.body.title;

    //get the description from the req body
    let description = req.body.description;
    //get the duration from the request body
    let duration = req.body.duration;

    //create jobAttributes object
    let jobAttributes = {};

    //if user wants to update the title
    if (title) {
      //then add title to jobAttributes
      jobAttributes.title = title;
    }

    //if user wants to update the description
    if (description) {
      //then add description to jobAttributes
      jobAttributes.description = description;
    }

    //if user wants to update the duration
    if (duration) {
      //then add duration to jobAttributes
      jobAttributes.duration = duration;
    }
    //call the update method to edit the job
    Job.update({ _id: id }, jobAttributes, (err, result) => {
      //if error comes send the 500 status with error
      if (err) {
        return res.status(500).send(err);
      }

      //if everything is good send the msg the job is
      //updated successfully
      return res.status(200).json({ msg: `job is updated with id  ${id}` });
    });
  },
  delete(req, res) {
    //get the id from req params
    let id = req.params.id;

    //call findByIdAndRemove method
    Job.findByIdAndRemove(id, err => {
      if (err) {
        return res.status(500).send(err);
      }

      //if everything is good, send the msg job has deleted
      return res.status(200).json({ msg: `Job is deleted with id ${id}` });
    });
  }
};

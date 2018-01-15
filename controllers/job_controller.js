const jobs = require('../config/jobs');

module.exports = {
  create(req, res) {
    let title = req.body.title;
    let duration = req.body.duration;
    let description = req.body.description;

    let job = {
      title,
      description,
      duration
    };

    jobs.push(job);
    if (!req.body) return res.sendStatus(400);
    return res.json(jobs);
  },
  findAll(req, res) {
    return res.json(jobs);
  }
};
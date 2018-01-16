const express = require("express");
const router = express.Router();
const JobController = require('../controllers/job_controller');

router.get("/", JobController.findAll);
router.post("/", JobController.create);

//Define the GET Endpoint
router.get("/:id", JobController.findOne);

//Define the PUT /:id endpoint
router.put("/:id", JobController.update);

//Define th DELETE /:id endpoint
router.delete("/:id", JobController.delete);

module.exports = router;
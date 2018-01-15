const express = require('express');
const router = express.Router();
const jobRoutes = require('../routes/jobRoutes');

router.use('/jobs', jobRoutes);

module.exports = router;
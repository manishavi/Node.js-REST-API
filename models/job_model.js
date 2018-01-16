//import mongoose package
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const JobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  duration: {
    type: String,
  }
});
module.exports = mongoose.model('Job', JobSchema);

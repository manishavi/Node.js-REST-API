//import mongoose package
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//create new JobSchema
const JobSchema = new Schema({
  //set title property to required
  title: {
    type: String,
    required: true
  },
  //add description property
  //set description to string
  description: {
    type: String
  },
  //add duration property
  //set the typeof duration to string
  duration: {
    type: String,
  }
});

//export the instance of model by passing JobSchema
module.exports = mongoose.model('Job', JobSchema);

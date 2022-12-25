const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // this is the Columns.
  /* I do the validation in the backend, 
  to make sure that only the necessary 
  information gets to the backend */
  Email: String,
  Lastname: String,
  Firstname: String,
  Age: String,
}, {timeseries: true}) // timeseries to know the insert and update dates


// Model which i'll insert in DB
module.exports = mongoose.model('users', UserSchema)
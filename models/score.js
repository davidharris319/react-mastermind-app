const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  initials: String,
  numGuesses: Number,
  seconds: Number
});

module.exports = mongoose.model('Score', scoreSchema);
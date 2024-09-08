const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  image: String,
  language: String,
  genre: String,
  director: String,
  trailer: String,
  description: String,
  duration: Number,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model('Movie', movieSchema);

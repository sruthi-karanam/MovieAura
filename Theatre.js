const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
  name: String,
  city: String,
  ticketPrice: Number,
  seats: Number,
  image: String,
});

module.exports = mongoose.model('Theatre', theatreSchema);


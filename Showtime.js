const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
  movieId: mongoose.Schema.Types.ObjectId,
  theatreId: mongoose.Schema.Types.ObjectId,
  startDate: Date,
  endDate: Date,
  ticketPrice: Number,
});

module.exports = mongoose.model('Showtime', showtimeSchema);


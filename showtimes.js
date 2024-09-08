const express = require('express');
const router = express.Router();
const Showtime = require('../models/Showtime');

// Get all showtimes
router.get('/', async (req, res) => {
  try {
    const showtimes = await Showtime.find();
    res.json(showtimes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Additional routes for add, update, delete can be added here

module.exports = router;

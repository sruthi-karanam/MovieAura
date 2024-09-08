const express = require('express');
const router = express.Router();
const Theatre = require('../models/Theatre');

// Get all theatres
router.get('/', async (req, res) => {
  try {
    const theatres = await Theatre.find();
    res.json(theatres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Additional routes for add, update, delete can be added here

module.exports = router;

// Create a new reservation
router.post('/', async (req, res) => {
    const reservation = new Reservation({
      movieId: req.body.movieId,
      theatreId: req.body.theatreId,
      date: req.body.date,
      startAt: req.body.startAt,
      seats: req.body.seats,
      orderId: req.body.orderId,
      ticketPrice: req.body.ticketPrice,
      total: req.body.total,
      name: req.body.name,
      phone: req.body.phone,
    });
  
    try {
      const newReservation = await reservation.save();
      res.status(201).json(newReservation);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Additional routes for update, delete can be added here
  
  module.exports = router;
  
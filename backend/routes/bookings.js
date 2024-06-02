const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const Movie = require('../models/movie');
const { isLoggedIn } = require('../middleware/isLoggedIn');

// Pregled zauzetih sedišta za emitovanje filma
router.get('/screening/:id_screening/occupied-seats', async (req, res) => {
  try {
    const bookings = await Booking.find({ id_screening: req.params.id_screening });
    const occupiedSeats = bookings.flatMap(booking => booking.reserved_seats.map(seat => seat.seat));
    res.json({ occupiedSeats });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rezervacija karata za više sedišta
router.post('/', isLoggedIn, async (req, res) => {
  const { id_user, id_movie, id_screening, reserved_seats } = req.body;

  try {
    const existingBookings = await Booking.find({ id_screening });

    // Provera zauzetih sedišta
    const occupiedSeats = existingBookings.flatMap(booking => booking.reserved_seats.map(seat => seat.seat));
    const alreadyOccupied = reserved_seats.some(seat => occupiedSeats.includes(seat.seat));

    if (alreadyOccupied) {
      return res.status(400).json({ message: "Some seats are already occupied" });
    }

    const booking = new Booking({
      id_user,
      id_movie,
      id_screening,
      reserved_seats
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Pregled svih rezervacija za korisnika
router.get('/user/:id_user', isLoggedIn, async (req, res) => {
  try {
    const bookings = await Booking.find({ id_user: req.params.id_user });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Pregled svih rezervacija za film
router.get('/movie/:id_movie', async (req, res) => {
  try {
    const bookings = await Booking.find({ id_movie: req.params.id_movie });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

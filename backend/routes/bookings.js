const express = require("express");
const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const Movie = require('../models/movie');
const { protect } = require('../middleware/authMiddleware');

// Ruta za pregled svih rezervacija
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

// Ruta za pregled svih rezervacija za film
// Rezervacija karata za više sedišta
router.post('/', async (req, res) => {
    const { id_user, id_movie, id_screening, reserved_seats } = req.body;

// Ruta za pregled svih rezervacija od korisnika

// Ruta za pregled rezervacija za korisnika za film

// Ruta za rezervaciju emitovanja za film od korisnika

// Ruta za pregled rezervacije po ID-u

module.exports   = router;
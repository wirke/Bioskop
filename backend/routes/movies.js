const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const { protect } = require('../middleware/authMiddleware');
const { isLoggedIn } = require('../middleware/isLoggedIn');

// Pregled filma po ID-u
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Pregled svih filmova
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Dodavanje filma
router.post('/', protect, isLoggedIn, async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Izmena filma
router.put('/:id', protect, isLoggedIn, async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Brisanje filma
router.delete('/:id', protect, isLoggedIn, async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Pretraga filmova po nazivu
router.get('/search/title', async (req, res) => {
    try {
        const movies = await Movie.find({ title: { $regex: req.query.title, $options: 'i' } });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Pretraga filmova po žanru
router.get('/search/genre', async (req, res) => {
    try {
        const movies = await Movie.find({ genre: { $regex: req.query.genre, $options: 'i' } });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Dodavanje emitovanja za film
router.post('/:id/screenings', protect, isLoggedIn, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        movie.screenings.push(req.body);
        await movie.save();
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Izmena emitovanja filma
router.put('/:id/screenings/:screeningId', protect, isLoggedIn, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        const screening = movie.screenings.id(req.params.screeningId);
        if (!screening) {
            return res.status(404).json({ message: 'Screening not found' });
        }
        screening.set(req.body);
        await movie.save();
        res.json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Brisanje emitovanja filma
router.delete('/:id/screenings/:screeningId', protect, isLoggedIn, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        const screening = movie.screenings.id(req.params.screeningId);
        if (!screening) {
            return res.status(404).json({ message: 'Screening not found' });
        }
        screening.remove();
        await movie.save();
        res.json({ message: 'Screening deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

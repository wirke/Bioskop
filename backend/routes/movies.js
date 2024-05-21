const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const { protect } = require('../middleware/authMiddleware');

// Ruta za dobijanje filma po ID-u
// Pregled filma po ID-u
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta za dobijanje svih filmova
// Pregled svih filmova
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta za dodavanje filma
router.post('/', async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
// Dodavanje filma
router.post('/', protect, async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Ruta za izmenu filma
router.put('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
// Izmena filma
router.put('/:id', protect, async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta za brisanje filma
router.delete('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
// Brisanje filma
router.delete('/:id', protect, async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta za dodavanje emitovanja filma
router.post('/:id/screenings', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
// Pretraga filmova po nazivu
router.get('/search/title', async (req, res) => {
    try {
        const movies = await Movie.find({ title: { $regex: req.query.title, $options: 'i' } });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    movie.screenings.push(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta za izmenu emitovanja filma
router.put('/:id/screenings/:screeningId', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    const screening = movie.screenings.id(req.params.screeningId);
    if (!screening) {
      return res.status(404).json({ message: "Screening not found" });
    }
    screening.set(req.body);
    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta za brisanje emitovanja filma
router.delete('/:id/screenings/:screeningId', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    movie.screenings.pull({ _id: req.params.screeningId });
    await movie.save();
    res.json({ message: "Screening deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta za pretragu filmova po nazivu
router.get('/search/title', async (req, res) => {
  try {
    const movies = await Movie.find({ title: { $regex: req.query.title, $options: 'i' } });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta za pretragu filmova po žanru
router.get('/search/genre', async (req, res) => {
  try {
    const movies = await Movie.find({ genre: { $regex: req.query.genre, $options: 'i' } });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;module.exports = router;

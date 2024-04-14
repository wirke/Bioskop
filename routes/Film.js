const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.post('/movies', movieController.createMovie);
router.get('/movies/:id', movieController.getMovieById);
router.patch('/movies/:id', movieController.updateMovie);
router.delete('/movies/:id', movieController.deleteMovie);
router.get('/movies', movieController.searchMovies);
router.get('/movies/:id/showtimes', movieController.getMovieShowtimes);

module.exports = router;

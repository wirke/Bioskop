const Movie = require('../models/movie');

const movieController = {
    // Dodavanje novog filma
    createMovie: async (req, res) => {
        try {
            const movie = new Movie(req.body);
            await movie.save();
            res.status(201).send(movie);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    // Dohvaćanje informacija o filmu
    getMovieById: async (req, res) => {
        try {
            const movie = await Movie.findById(req.params.id);
            if (!movie) {
                return res.status(404).send();
            }
            res.send(movie);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    // Ažuriranje podataka filma
    updateMovie: async (req, res) => {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['title', 'description', 'poster_url', 'release_date', 'genre', 'duration', 'actors', 'director', 'ratings', 'showtimes'];
        const isValidOperation = updates.every(update => allowedUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' });
        }

        try {
            const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!movie) {
                return res.status(404).send();
            }
            res.send(movie);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    // Brisanje filma
    deleteMovie: async (req, res) => {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            if (!movie) {
                return res.status(404).send();
            }
            res.send(movie);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    // Pretraživanje filmova po različitim kriterijima
    searchMovies: async (req, res) => {
        const query = req.query;
        try {
            const movies = await Movie.find(query);
            res.send(movies);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    // Dohvaćanje svih dostupnih vremena prikazivanja filma
    getMovieShowtimes: async (req, res) => {
        try {
            const movie = await Movie.findById(req.params.id);
            if (!movie) {
                return res.status(404).send();
            }
            const showtimes = movie.showtimes;
            res.send(showtimes);
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = movieController;

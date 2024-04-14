const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    poster_url: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    },
    genre: [{
        type: String,
        required: true
    }],
    duration: {
        type: Number,
        required: true
    },
    actors: [{
        type: String,
        required: true
    }],
    director: {
        type: String,
        required: true
    },
    ratings: {
        average: {
            type: Number,
            default: 0
        },
        count: {
            type: Number,
            default: 0
        }
    },
    showtimes: [{
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        available_seats: {
            type: Number,
            required: true
        },
        room: {
            type: {
                horizontal_seats: {
                    type: Number,
                    required: true
                },
                vertical_seats: {
                    type: Number,
                    required: true
                }
            },
            required: true
        },
        booked_seats: [{
            type: String
        }]
    }]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

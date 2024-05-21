const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    genre: String,
    image_url: String,
    releaseDate: Date,
    actors: [{
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        }
    }],
    screenings: [{
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        room: {
            type: String,
            required: true,
        },
        reserved_seats: [{
            seat: {
                type: String,
                required: true,
            },
        }],
    }]
}, { collection: 'Film' });

module.exports = mongoose.model('Movie', movieSchema);
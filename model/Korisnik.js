const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    bookings: [{
        movie_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie',
            required: true
        },
        showtime_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        seats_booked: [{
            type: String,
            required: true
        }]
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;

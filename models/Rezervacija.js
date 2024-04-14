const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
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
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

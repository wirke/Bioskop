const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    id_movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    },
    id_screening: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    reserved_seats: [{
        seat: {
            type: String,
            required: true,
        }
    }]
}, { collection: 'Rezervacije' });

module.exports = mongoose.model('Booking', bookingSchema);

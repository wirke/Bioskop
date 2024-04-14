const Booking = require('../models/booking');

const bookingController = {
    // Kreiranje nove rezervacije
    createBooking: async (req, res) => {
        try {
            const booking = new Booking(req.body);
            await booking.save();
            res.status(201).send(booking);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    // Dohvaćanje informacija o rezervaciji
    getBookingById: async (req, res) => {
        try {
            const booking = await Booking.findById(req.params.id);
            if (!booking) {
                return res.status(404).send();
            }
            res.send(booking);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    // Ažuriranje rezervacije
    updateBooking: async (req, res) => {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['user_id', 'movie_id', 'showtime_id', 'seats_booked'];
        const isValidOperation = updates.every(update => allowedUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' });
        }

        try {
            const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!booking) {
                return res.status(404).send();
            }
            res.send(booking);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    // Brisanje rezervacije
    deleteBooking: async (req, res) => {
        try {
            const booking = await Booking.findByIdAndDelete(req.params.id);
            if (!booking) {
                return res.status(404).send();
            }
            res.send(booking);
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = bookingController;

const express = require('express');
const mongoose = require('mongoose');
const Korisnik = require('./routes/Korisnik');
const Film = require('./routes/Film');
const Rezervacija = require('./routes/Rezervacija');

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = 'mongodb://localhost:27017/movie_booking_app';

app.use(express.json());

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

app.use('/api/users', Korisnik);
app.use('/api/movies', Film);
app.use('/api/bookings', Rezervacija);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
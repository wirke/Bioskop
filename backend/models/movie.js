const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  _id: {
    type: String, 
    required: true
  },
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  genre: String,
  image_url: String,
  releaseDate: Date,
  actors: [{
    name: String,
    surname: String
  }],
  screenings: [{
    date: Date,
    time: String,
    room: String,
    reserved_seats: [{
      seat: String,
    }],
  }]
}, { collection: 'Film' });

module.exports = mongoose.model('Movie', movieSchema);

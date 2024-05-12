const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  genre: String,
  imageUrl: String,
  releaseDate: Date,
  actors: [{
    name: String,
    surname: String
  }],
  screenings: [{
    date: Date,
    time: String,
    room: String
  }]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

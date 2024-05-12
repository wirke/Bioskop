const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  genre: String,
  imageUrl: String,
  releaseDate: Date,
  actors: [{ name: String, surname: String }],
  screenings: [{ date: Date, time: String, room: String }]
});

module.exports = mongoose.model('Movie', movieSchema);
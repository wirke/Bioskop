const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectToDatabase = require('./db');

const moviesRouter = require('./routes/movies');

const app = express();

// Povezivanje na bazu podataka prilikom pokretanja servera
connectToDatabase()
  .then((database) => {
    console.log("Connected to database");
    // Pokretanje servera nakon uspešnog povezivanja na bazu
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
    process.exit(1); // Zatvori aplikaciju ako ne možeš da se povežeš na bazu
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rute za aplikaciju
app.use('/api/movies', moviesRouter);

// Uhvati 404 grešku i prosledi je error handler-u
app.use(function(req, res, next) {
  res.status(404).json({ message: "Not found" });
});

// Error handler
app.use(function(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const movieRouter = require('./routes/movies');
const userRouter = require('./routes/users');
const bookingRouter = require('./routes/bookings');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const uri = 'mongodb+srv://wiriyevich:cavuh9UCvo10rbvI@cluster0.nzgsmre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
  dbName: 'Bioskop',
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
  process.exit(1);
});

app.use(express.json());
app.use('/movies', movieRouter);
app.use('/users', userRouter);
app.use('/bookings', bookingRouter);

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});

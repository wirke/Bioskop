import axios from 'axios';

const API_URL = 'http://localhost:5000/bookings';

export const getOccupiedSeats = async (screeningId) => {
  return await axios.get(`${API_URL}/screening/${screeningId}/occupied-seats`);
};

export const createBooking = async (bookingData) => {
  return await axios.post(API_URL, bookingData);
};

export const getBookingsByUserId = async (userId) => {
  return await axios.get(`${API_URL}/user/${userId}`);
};

export const getBookingsByMovieId = async (movieId) => {
  return await axios.get(`${API_URL}/movie/${movieId}`);
};

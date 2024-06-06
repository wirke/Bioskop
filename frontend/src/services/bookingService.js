import axios from 'axios';

const API_URL = 'http://localhost:5000/bookings';

export const getOccupiedSeats = async (screeningId) => {
  try {
    const response = await axios.get(`${API_URL}/screening/${screeningId}/occupied-seats`);
    return response.data;
  } catch (error){
    console.error(error);
    throw(error);
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await axios.post(API_URL, bookingData);
    return response.data;
  } catch (error){
    console.error(error);
    throw(error);
  }
};

export const getBookingsByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data;
  } catch (error){
    console.error(error);
    throw(error);
  }
};

export const getBookingsByMovieId = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}`);
    return response.data;
  } catch (error){
    console.error(error);
    throw(error);
  }
};

import axios from 'axios';

const API_URL = 'http://localhost:5000/movies';

export const getAllMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}`)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createMovie = async (movieData) => {
  try {
    const response = await axios.post(API_URL, movieData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateMovie = async (id, movieData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, movieData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw(error);
  }
};

export const deleteMovie = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw(error);
  }
};

export const searchMoviesByTitle = async (title) => {
  try {
    const response = await axios.get(`${API_URL}/search/title?title=${title}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw(error);
  }
};

export const searchMoviesByGenre = async (genre) => {
  try {
    const response = await axios.get(`${API_URL}/search/genre?genre=${genre}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw(error);
  }
};

export const addScreening = async (movieId, screeningData) => {
  try {
    const response = await axios.post(`${API_URL}/${movieId}/screenings`, screeningData);
    return response.data;
  } catch(error){
    console.error(error);
    throw(error);
  }
};

export const updateScreening = async (movieId, screeningId, screeningData) => {
  try {
    const response = await axios.put(`${API_URL}/${movieId}/screenings/${screeningId}`, screeningData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw (error);
  }
};

export const deleteScreening = async (movieId, screeningId) => {
  try {
    const response = await axios.delete(`${API_URL}/${movieId}/screenings/${screeningId}`);
    return response.data;
  } catch (error){
    console.error(error);
    throw(error);
  }
};

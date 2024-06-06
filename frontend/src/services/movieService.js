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
  return await axios.get(`${API_URL}/${id}`);
};

export const createMovie = async (movieData) => {
  return await axios.post(API_URL, movieData);
};

export const updateMovie = async (id, movieData) => {
  return await axios.put(`${API_URL}/${id}`, movieData);
};

export const deleteMovie = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

export const searchMoviesByTitle = async (title) => {
  return await axios.get(`${API_URL}/search/title?title=${title}`);
};

export const searchMoviesByGenre = async (genre) => {
  return await axios.get(`${API_URL}/search/genre?genre=${genre}`);
};

export const addScreening = async (movieId, screeningData) => {
  return await axios.post(`${API_URL}/${movieId}/screenings`, screeningData);
};

export const updateScreening = async (movieId, screeningId, screeningData) => {
  return await axios.put(`${API_URL}/${movieId}/screenings/${screeningId}`, screeningData);
};

export const deleteScreening = async (movieId, screeningId) => {
  return await axios.delete(`${API_URL}/${movieId}/screenings/${screeningId}`);
};

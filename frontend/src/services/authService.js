import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

export const register = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};

export const logout = async () => {
  return await axios.post(`${API_URL}/logout`);
};

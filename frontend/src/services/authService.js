import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error){
    console.error(error);
    throw(error);
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error){
    console.error(error);
    throw(error);
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${API_URL}/logout`);
    return response.data;
  } catch (error){
    console.error(error);
    throw(error);
  }
};

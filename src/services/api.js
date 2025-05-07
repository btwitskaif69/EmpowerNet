import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // proxy should match
});

export const getResources = () => API.get('/resources');

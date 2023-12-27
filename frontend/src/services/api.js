import axios from 'axios';

// Set up axios instance
const api = axios.create({
  baseURL: 'http://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Export API routes
export const login = (credentials) => api.post('/auth/login', credentials);
export const fetchData = (token) =>
  api.get('/data', { headers: { Authorization: `Bearer ${token}` } });

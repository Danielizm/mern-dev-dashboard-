import axios from 'axios';

// Set up axios instance
const api = axios.create({
  baseURL: 'http://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Export API routes
export const loginAPI = (credentials) => api.post('/auth/login', credentials);
// Get all Data
export const fetchDataAPI = (token) =>
  api.get('/data', { headers: { Authorization: `Bearer ${token}` } });

// Create a new item (POST)
export const createItemAPI = (token, data) => {
  return api.post('/data', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Update an existing item (PUT)
export const updateItemAPI = (token, id, updatedData) => {
  return api.put(`/data/${id}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Delete an item (DELETE)
export const deleteItemAPI = (token, id) => {
  return api.delete(`/data/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
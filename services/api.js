import axios from 'axios';

// Create axios instance with base URL
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000, // Increased to 30 seconds for more reliable API calls
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Resident API calls
export const residentAPI = {
  // Register resident
  register: (data) => API.post('/residents/register', data),
  
  // Login resident
  login: (email, password) => API.post('/residents/login', { email, password }),
  
  // Get resident profile
  getProfile: () => API.get('/residents/profile'),
  
  // Update resident profile
  updateProfile: (data) => API.put('/residents/profile', data),
  
  // Get all residents (admin only)
  getAllResidents: () => API.get('/residents'),
  
  // Get resident by ID
  getResidentById: (id) => API.get(`/residents/${id}`),
};

// Admin API calls
export const adminAPI = {
  // Admin login
  login: (email, password) => API.post('/admin/login', { email, password }),
  
  // Get admin dashboard stats
  getDashboardStats: () => API.get('/admin/stats'),
  
  // Get all residents (admin view)
  getAllResidents: () => API.get('/admin/residents'),
};

// Utility function to check backend health
export const checkBackendHealth = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/health');
    return response.data.success;
  } catch (error) {
    console.error('Backend health check failed:', error.message);
    return false;
  }
};

// Utility function to get error message
export const getErrorMessage = (error) => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  if (error.message) {
    return error.message;
  }
  return 'An error occurred';
};

export default API;

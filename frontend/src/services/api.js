import axios from 'axios';

// Create a central Axios instance
const API = axios.create({
  baseURL: "https://hirehub-job-portal-production.up.railway.app"
});

// Request Interceptor: Automatically attach the JWT token to every outgoing request
api.interceptors.request.use(
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

export default api;

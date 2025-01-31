import axios from 'axios';

// Base API URL
const API_URL = 'http://localhost:5000/api/auth';

// Function to handle API requests
const apiRequest = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_URL}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; // Returning the response data
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error.response?.data || error.message);
    throw error.response?.data?.message || 'An error occurred. Please try again.';
  }
};

// Login function
export const loginUser = (email, password) => apiRequest('/auth/login', { email, password });

// Signup function
export const signupUser = (email, password, firstName, lastName) => 
  apiRequest('/auth/signup', { email, password, firstName, lastName });

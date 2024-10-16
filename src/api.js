// import axios from 'axios';

// // Create an Axios instance
// const api = axios.create({
//   baseURL: 'http://localhost:5000/api', // Replace with your backend URL
// });

// // Interceptor to add the token to the headers
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token'); // Get token from localStorage
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`; // Set the token in the Authorization header
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Named exports for specific API functions
// export const createBook = async (bookData) => {
//   try {
//     const response = await api.post('/books', bookData);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating book:', error);
//     throw error; // Rethrow the error for handling in the component
//   }
// };

// export const fetchBooks = async () => {
//   try {
//     const response = await api.get('/books');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching books:', error);
//     throw error; // Rethrow the error for handling in the component
//   }
// };

// // Default export for the Axios instance
// export default api;

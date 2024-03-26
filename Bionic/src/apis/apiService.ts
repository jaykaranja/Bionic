import axios from 'axios';

const axiosService = () => {
  // Create a new instance of Axios
  const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL, // Replace with your API base URL
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Interceptor to include the bearer token from localStorage in the headers
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default axiosService;

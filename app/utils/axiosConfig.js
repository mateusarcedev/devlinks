import axios from 'axios';

export const AxiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HEROKU_URL,
  withCredentials: true,
});

AxiosConfig.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Adicione um interceptor de resposta para lidar com erros
AxiosConfig.interceptors.response.use(
  response => response,
  error => {
    console.error('Axios error:', error.response || error);
    return Promise.reject(error);
  }
);
import axios from 'axios';

export const AxiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HEROKU_URL,
});


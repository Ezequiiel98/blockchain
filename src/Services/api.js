import { create } from 'apisauce';

const API_URL = process.env.REACT_APP_API_URL;

const api = create({
  baseURL: API_URL,
  headers: {
    Authorization: 'user_token',
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export default api;
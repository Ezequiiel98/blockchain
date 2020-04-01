import api from './api';

export const sendGame = data => api.post('/join_game', data); /* ahora si */
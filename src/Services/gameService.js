import api from './api';

export const sendGame = data => api.post('/game/join_game', data);

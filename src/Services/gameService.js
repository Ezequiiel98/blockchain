import api from './api';

export const sendGame = data => api.post('/game/join_game', data);

/* Here I generate the contact with the API */

import api from './api';

/* Here I generate the contact with the API */
export const fetchGame = () => api.get('/game?id=2&miner=b5e285a1-31a3-4512-a7bb-c290209e1bc5');
export const sendGame = data => api.post('/game/join_game', data);

/* Here I generate the contact with the API to votation */
export const setNews = data => api.post('/game/news_update', data);

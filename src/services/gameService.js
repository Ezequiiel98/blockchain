import api from './api';

/* Here I generate the contact with the API */
export const fetchGame = ({ id, miner }) => api.get(`/game?id=${id}&miner=${miner}`);
export const sendGame = data => api.post('/game/join_game', data);

/* Here I generate the contact with the API to votation */
export const setNews = data => api.post('/game/news_update', data);

import api from './api';
/* const id= 2;
 const miner = '85c2e2ea-66fb-4de9-859e-f8fb40496211'  */
export const fetchGame = () => api.get('/game?id=2&miner=85c2e2ea-66fb-4de9-859e-f8fb40496211');

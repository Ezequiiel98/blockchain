import api from './api';

export const sendBlocks = data => api.post('/blocks/add', data);
console.log(api)

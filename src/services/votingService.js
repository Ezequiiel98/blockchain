import api from './api';

export const sendVote = data => api.post('/voting/vote', data);

/*  export const sendVote = data => console.log(data);
 */

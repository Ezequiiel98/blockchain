import { create } from 'apisauce';

const api = create({


  headers: {
    'Authorization': 'user_token',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Referrer Policy': 'strict-origin-when-cross-origin'
  } 
});

export default api;

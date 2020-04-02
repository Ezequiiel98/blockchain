import { create } from 'apisauce';

/* ueno mira eso las variables de entorno son algo que esta en tu pc nomas
oki
por cuestiones de seguridadn o las subis (?  en react se declaran asi REACT_APP_ y
   tu nombre de variable
  estase se llama API_URL entonces vamos a declararla,
   siempre las llamas usando process.env.nombreDeLaVariable,  las declaras en un archivo ,.evnv
*/
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

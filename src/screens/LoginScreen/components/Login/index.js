import React from 'react';

import styles from './index.module.scss';

function Login() {
  return (

  <div>
      <label>NOMBRE</label>
      <input name="username" id="username" type="text" />

      <label>CÓDIGO DE INGRESO</label>
      <input name="usercode" id="usercode" type="number" />

  </div>
  )
  } 


export default Login;
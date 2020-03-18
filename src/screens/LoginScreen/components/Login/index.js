import React from 'react';

import styles from './index.module.scss';

import '../../assets/css/index.css'

function Login() {
  return (
    <div className={styles.Login}>
      <label>NOMBRE</label>
      <input name="username" id="username" type="text" /><label>CÓDIGO DE INGRESO</label>
      <input name="usercode" id="usercode" type="text" />
    </div>
  );
}

export default Login;

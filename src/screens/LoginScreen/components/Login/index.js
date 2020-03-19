import React from 'react';

import styles from './index.module.scss';

import VioletButton from '../../../../components/VioletButton';

function Login() {
  return (
    <div className={styles.Login}>
      <label className={styles.label}>NOMBRE</label>
      <input name="username" id="username" type="text" />
      <label className={styles.label}>CÓDIGO DE INGRESO</label>
      <input name="usercode" id="usercode" type="text" />
      <VioletButton />
    </div>
  );
}

export default Login;


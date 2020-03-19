import React from 'react';

import VioletButton from '../../../../components/VioletButton';

import styles from './index.module.scss';

function Login() {
  return (
    <div className={styles.login}>
      {' '}
      <div>
        <label className={styles.label}>NOMBRE</label>
        <input name="username" id="username" type="text" />
      </div>
      <div>
        <label className={styles.label}>CÓDIGO DE INGRESO</label>
        <input name="usercode" id="usercode" type="text" />
      </div>
      <div className={styles.violetbutton}>
        <VioletButton text="ENTRAR" />
      </div>
    </div>
  );
}

export default Login;

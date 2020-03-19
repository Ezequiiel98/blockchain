import React from 'react';

import Login from './components/Login';
import Blockimg from './components/Blockimg';
import styles from './index.module.scss';

function LoginScreen() {
  return (
    <div className={styles.loginscreen}>
      <h1>Blockchain </h1>
      <Login />
      <Blockimg />
    </div>
  );
}

export default LoginScreen;

import React from 'react';

import FormLogin from './components/FormLogin';
import Blockimg from './components/Blockimg';
import styles from './index.module.scss';

function LoginScreen() {
  return (
    <div className={styles.loginScreen}>
      <FormLogin />
      <Blockimg />
    </div>
  );
}

export default LoginScreen;

import React from 'react';

import FormLogin from './components/FormLogin';
import BlockImg from './components/BlockImg';
import styles from './index.module.scss';

function LoginScreen() {
  return (
    <div className={styles.loginScreen}>
      <FormLogin />
      <BlockImg />
    </div>
  );
}

export default LoginScreen;

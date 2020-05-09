import React from 'react';

import Footer from '../../components/Footer';

import FormLogin from './components/FormLogin';
import BlockImg from './components/BlockImg';
import styles from './index.module.scss';

function LoginScreen() {
  return (
    <div className={styles.loginScreen}>
      <FormLogin />
      <BlockImg />
      <Footer />
    </div>
  );
}

export default LoginScreen;

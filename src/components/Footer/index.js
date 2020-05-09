import React from 'react';

import styles from './index.module.scss';
import Devs from './components/Devs';

function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <Devs />
    </footer>
  );
}

export default Footer;

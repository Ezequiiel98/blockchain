import React from 'react';

import styles from './index.module.scss';
import violetLines from './assets/img/violetLines.png';

function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <img className={styles.violetLines} src={violetLines} />
    </footer>
}

export default Footer;

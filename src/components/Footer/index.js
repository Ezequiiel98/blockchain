import React from 'react';

import Dev from './components/Dev';
import styles from './index.module.scss';
import { DEVS } from './constants/devs';

function Footer() {
  return (
    <footer className={styles.containerFooter}>
      {DEVS.map(dev => (
        <Dev key={dev.id} {...dev} />
      ))}
    </footer>
  );
}

export default Footer;

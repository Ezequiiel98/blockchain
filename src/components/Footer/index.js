import React from 'react';

import Devs from './components/Devs';
import styles from './index.module.scss';
import dev from './components/constants/dev';
import violetLines from './assets/img/violetLines.png';

function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <img className={styles.violetLines} src={violetLines} />
      {Devs.map(dev => (
        <Devs key={dev.id} {...name} {...linkedin} {...github} />
      ))}
    </footer>
  );
}

export default Footer;

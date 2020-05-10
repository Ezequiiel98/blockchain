import React from 'react';

import Devs from './components/Devs';
import styles from './index.module.scss';
import {dev} from './components/constants/dev';
import violetLines from './assets/img/violetLines.png';

function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <img className={styles.violetLines} src={violetLines} />
      {dev.map(dev => (
        <Devs key={dev.id} {dev.name} {dev.linkedin} {dev.github} />
      ))}
    </footer>
  );
}

export default Footer;

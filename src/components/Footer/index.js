import React from 'react';

import styles from './index.module.scss';
import Dev from './components/Dev';
import violetLines from './assets/img/violetLines.png';

function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <img className={styles.violetLines} src={violetLines} />
      {Devs.map(dev => (
        </Devs key= {dev.name} {dev.id}{dev.linkedin} {dev.github} />
      ))}
    </footer>
  );
}

export default Footer;

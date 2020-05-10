import React from 'react';

import Devs from './components/Devs';
import styles from './index.module.scss';
import dev from './components/constants/dev';
import violetLines from './assets/img/violetLines.png';

function Footer({ id, name, linkedin, github }) {
  return (
    <footer className={styles.containerFooter}>
      <img className={styles.violetLines} src={violetLines} />
      {dev.map(devz => (
        <Devs key={dev.id} name={dev.name} linkedin={dev.linkedin} github={dev.github} />
      ))}
    </footer>
  );
}

export default Footer;

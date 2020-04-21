import React from 'react';

import styles from './index.module.scss';
import violetLines from './assets/img/violetLines.png';
import githubIcon from './assets/img/githubIcon.png';
import linkedinIcon from './assets/img/linkedinIcon.jpg';

function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <img className={styles.violetLines} src={violetLines} />
      <img className={styles.githubIcon} src={githubIcon} />
      <img className={styles.linkedinIcon} src={linkedinIcon} />
    </footer>
  );
}

export default Footer;

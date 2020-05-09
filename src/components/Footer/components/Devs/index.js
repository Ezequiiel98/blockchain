import React from 'react';

import styles from './index.module.scss';
import devs from '../constants';
import githubIcon from './assets/img/githubIcon.png';
import linkedinIcon from './assets/img/linkedinIcon.jpg';

function Devs() {
  return (
    <div>
      <div className={styles.containerIcons}>
        <a 'https://linkendn.com/in/${props.dev.linkedin}' <img className={styles.linkedinIcon} src={linkedinIcon} /></a>
        <a  'https://github.com/${props.dev.github}'<img className={styles.githubIcon} src={githubIcon} /></a>
      </div>
      <span>Ezequiel Aragón Viviana Choque Branko Cruz</span>
    </div>
  );
}

export default Devs;

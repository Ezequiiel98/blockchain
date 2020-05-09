import React from 'react';

import styles from './index.module.scss';
import devs from '../constants/devs';
import githubIcon from './assets/img/githubIcon.png';
import linkedinIcon from './assets/img/linkedinIcon.jpg';

function Devs() {
  return (
    <div>
      <div className={styles.containerIcons}>
        <a 'https://linkendn.com/in/${props.linkedin}' <img className={styles.linkedinIcon} src={linkedinIcon} /></a>
        <a  'https://github.com/${props.github}'<img className={styles.githubIcon} src={githubIcon} /></a>
      </div>
      <span> {props.name}</span>
    </div>
  );
}

export default Devs;

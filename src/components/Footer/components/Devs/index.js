import React from 'react';

import styles from './index.module.scss';
import githubIcon from './assets/img/githubIcon.png';
import linkedinIcon from './assets/img/linkedinIcon.jpg';

function Devs() {
  return (
      <div className={styles.containerIcons}>
        <img className={styles.githubIcon} src={githubIcon} />
        <img className={styles.linkedinIcon} src={linkedinIcon} />
      </div>
  );
}

export default Devs;

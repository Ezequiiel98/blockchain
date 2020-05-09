import React from 'react';

import styles from './index.module.scss';
import violetLines from './assets/img/violetLines.png';
import githubIcon from './assets/img/githubIcon.png';
import linkedinIcon from './assets/img/linkedinIcon.jpg';

function Devs() {
  return (
    <div className={styles.containerDevs}>
      <div className={styles.containerVioletLines}>
        <img className={styles.violetLines} src={violetLines} />
      </div>
      <div className={styles.containerIcons}>
        <img className={styles.githubIcon} src={githubIcon} />
        <img className={styles.linkedinIcon} src={linkedinIcon} />
      </div>
    </div>
  );
}

export default Devs;

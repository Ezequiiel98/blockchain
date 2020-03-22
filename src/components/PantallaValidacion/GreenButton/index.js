import React from 'react';

import styles from './index.module.scss';

import Verde from '../../../assets/img/Verde.png';

function GreenButton() {
  return (
    <div className={styles.containerGreen}>
      <div className={styles.containerStrongGreen}>
        <img className={styles.iconRectangle} src={Verde} />
      </div>
    </div>
  );
}

export default GreenButton;

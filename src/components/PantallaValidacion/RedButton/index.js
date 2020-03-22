import React from 'react';

import styles from './index.module.scss';

import Rojo from '../../../assets/img/Rojo.png';

function RedButton() {
  return (
    <div className={styles.containerRojo}>
      <div className={styles.containerBordo}>
        <img className={styles.iconRectangle} src={Rojo} />
      </div>
    </div>
  );
}

export default RedButton;

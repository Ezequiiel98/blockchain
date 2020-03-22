import React from 'react';

import Rojo from '../../../assets/img/Rojo.png';

import styles from './index.module.scss';

function Rectangulos() {
  return (
    <div className={styles.containerScore}>
      <span className={styles.iconoX}>
        <span><img className={styles.XRojo} src={Rojo} ></img></span>
      </span>
    </div>
  );
}

export default Rectangulos;

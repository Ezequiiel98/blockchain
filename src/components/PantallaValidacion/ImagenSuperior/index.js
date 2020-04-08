import React from 'react';

import LineasGrises from '../../../assets/img/lineasGrises.png';

import styles from './index.module.scss';

function ImagenSuperior() {
  return (
    <div>
      <img className={styles.lineasGrises} src={LineasGrises} />
    </div>
);
}
export default ImagenSuperior;

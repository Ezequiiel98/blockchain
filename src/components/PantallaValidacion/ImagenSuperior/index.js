import React from 'react';

import LineasGrises from '../../../assets/img/LineasGrises.png';

import styles from './index.module.scss';

function ImagenSuperior() {
  return (
    <div>
      <img className={styles.LineasGrises} src={LineasGrises} />
    </div>
);
}
export default ImagenSuperior;
import React from 'react';

import azulyOro from '../../../assets/azulyOro.png';

import styles from './index.module.scss';

function Image() {
  return (
    <div className={styles.Container}>
      <img className={styles.azulyOro} src={azulyOro} />
    </div>
  );
}

export default Image;

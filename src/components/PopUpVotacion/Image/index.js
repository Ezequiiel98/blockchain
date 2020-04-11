import React from 'react';

import AzulyOro from '../../../assets/AzulyOro.png';

import styles from './index.module.scss';

function Image() {
  return (
    <div className={styles.Container}>
      <img className={styles.AzulyOro} src={AzulyOro} />
    </div>
  );
}

export default Image;

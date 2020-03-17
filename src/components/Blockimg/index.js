import React from 'react';

import img from './assets/img/blockimg.svg';
import styles from './index.module.scss';

function Blockimg() {
  return (
    <div className={styles.blockimg}>
      <img src={img} />
    </div>
  );
}

export default Blockimg;

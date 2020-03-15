import React from 'react';

import Board from './components/Board';
import styles from './index.module.scss';

function Resolution() {
  return (
    <div className={styles.containerResolution}>
      <Board />
      <div className={styles.containerButton}>
        <button className={styles.button}>MINAR</button>
      </div>
    </div>
  );
}

export default Resolution;

import React from 'react';

import Board from './components/Board';
import styles from './index.module.scss';

function Resolution() {
  return (
    <div className={styles.container}>
      <Board />
    </div>
  );
}

export default Resolution;

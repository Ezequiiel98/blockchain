import React from 'react';

import styles from './index.module.scss';

import BoardResolution from './components/BoardResolution';
import Resolution from './components/Resolution';

function Principal() {
  return (
    <div className={styles.boards}>
        <BoardResolution />
        <Resolution />
    </div>
  );
}

export default Principal;

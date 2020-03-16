import React from 'react';

import styles from './index.module.scss';
import Header from './components/Header';
import Blocks from './components/Blocks';
import BoardGame from './components/BoardGame';
import Resolution from './components/Resolution';

function Principal() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Blocks />
      <div className={styles.boards}>
        <BoardGame />
        <Resolution />
      </div>
    </div>
  );
}

export default Principal;

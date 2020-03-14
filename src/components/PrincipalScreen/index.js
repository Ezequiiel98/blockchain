import React from 'react';

import styles from './index.module.scss';
import Header from './components/Header';
import Blocks from './components/Blocks';
import BoardGame from './components/BoardGame';
import BoardResolution from './components/BoardResolution';


function PrincipalScreen() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Blocks />
      <div className={styles.boards}>
        <BoardGame />
        <BoardResolution />
      </div>
    </div>
  );
}

export default PrincipalScreen;

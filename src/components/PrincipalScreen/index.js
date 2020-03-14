import React from 'react';

import styles from './index.module.scss';
import Header from './components/Header';
import Blocks from './components/Blocks';
import BoardGame from './components/BoardGame';


function PrincipalScreen() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Blocks />
      <BoardGame />
    </div>
  );
}

export default PrincipalScreen;

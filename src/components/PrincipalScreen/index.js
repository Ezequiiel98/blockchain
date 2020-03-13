import React from 'react';

import styles from './index.module.scss';
import Header from './components/Header';
import Blocks from './components/Blocks';

function PrincipalScreen() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Blocks />
    </div>
  );
}

export default PrincipalScreen;

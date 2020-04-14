import React from 'react';

import styles from './index.module.scss';
import MainText from './components/MainText';
import SecondaryText from './components/SecondaryText';
import CheckButton from './components/CheckButton';
import Blocks from './components/Blocks';

function PopUpVotacion() {
  return (
    <div className={styles.container}>
      <div className={styles.whiteBox}>
        <MainText />
        <Blocks />
        <SecondaryText />
        <CheckButton text="REVISAR" />
      </div>
    </div>
  );
}

export default PopUpVotacion;

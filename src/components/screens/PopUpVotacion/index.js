import React from 'react';

import AzulyOro from './components/Image';
import styles from './index.module.scss';
import MainText from './components/MainText';
import SecondaryText from './components/SecondaryText';
import CheckButton from './components/CheckButton';

function PopUpVotacion() {
  return (
    <div className={styles.container}>
      <div className={styles.whiteBox}>
        <MainText />
        <AzulyOro />
        <SecondaryText />
        <CheckButton text="REVISAR" />
      </div>
    </div>
  );
}

export default PopUpVotacion;

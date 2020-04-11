import React from 'react';

import AzulyOro from './Image';
import styles from './index.module.scss';
import MainText from './MainText';
import SecondaryText from './SecondaryText';
import VioletButton from './VioletteButton';

function PopUpVotacion() {
  return (
    <div className={styles.container}>
      <div className={styles.whiteBox}>
        <MainText />
        <AzulyOro />
        <SecondaryText />
        <VioletButton text="REVISAR" />
      </div>
    </div>
  );
}

export default PopUpVotacion;

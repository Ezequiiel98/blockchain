import React from 'react';

import AzulyOro from './Image';
import Styles from './index.module.scss';
import MainText from './MainText';
import SecondaryText from './SecondaryText';
import VioletButton from './VioletteButton';

function PopUpVotacion() {
  return (
    <div className={Styles.Container}>
      <div className={Styles.WhiteBox}>
        <MainText />
        <AzulyOro />
        <SecondaryText />
        <VioletButton text="REVISAR" />
      </div>
    </div>
  );
}

export default PopUpVotacion;

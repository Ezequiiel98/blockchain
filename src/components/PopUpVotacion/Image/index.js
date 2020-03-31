import React from 'react';

import AzulyOro from '../../../assets/AzulyOro.png';

import Styles from './index.module.scss';

function Image() {
  return (
    <div className={Styles.Container}>
      <img className={Styles.AzulyOro} src={AzulyOro} />
    </div>
  );
}

export default Image;

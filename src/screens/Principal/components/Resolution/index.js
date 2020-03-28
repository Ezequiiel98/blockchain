import React from 'react';

import BoardResolution from '../../../../components/BoardResolution';
import VioletButton from '../../../../components/VioletButton';

import styles from './index.module.scss';

function Resolution() {
  return (
    <div className={styles.containerResolution}>
      <BoardResolution />
      <VioletButton text="MINAR" />
    </div>
  );
}

export default Resolution;
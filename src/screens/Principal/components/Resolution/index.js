import React from 'react';

import BoardResolution from '../../../../components/BoardResolution';

import Button from './components/Button';
import styles from './index.module.scss';

function Resolution() {
  return (
    <div className={styles.containerResolution}>
      <BoardResolution />
      <Button />
    </div>
  );
}

export default Resolution;

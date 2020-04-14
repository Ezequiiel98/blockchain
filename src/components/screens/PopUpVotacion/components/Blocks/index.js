import React from 'react';

import imgBlocks from '../../assets/img/imgBlocks.png';

import styles from './index.module.scss';

function Blocks() {
  return (
    <div className={styles.Container}>
      <img className={styles.blocks} src={imgBlocks} />
    </div>
  );
}

export default Blocks;

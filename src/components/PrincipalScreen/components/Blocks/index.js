import React from 'react';

import styles from './index.module.scss';
import Block from './components/Block';

function Blocks() {
  return (
    <div className={styles.containerBlocks}>
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <p>></p>
    </div>
  );
}

export default Blocks;

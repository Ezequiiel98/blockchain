import React from 'react';

import styles from './index.module.scss';
import Block from './components/Block';

function Blocks() {
  const scrollNext = e => {
    const containerBlocks = e.target.parentNode.childNodes[2];
    containerBlocks.scrollLeft += 50;
  };

  const scrollBack = e => {
    const containerBlocks = e.target.parentNode.childNodes[2];
    containerBlocks.scrollLeft -= 50;
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={scrollNext} className={styles.next} />
      <button type="button" onClick={scrollBack} className={styles.back} />
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
      </div>
    </div>
  );
}

export default Blocks;

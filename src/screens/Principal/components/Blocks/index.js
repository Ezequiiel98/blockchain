import React from 'react';

import blocks from '../constants/blocks';

import Block from './components/Block';
import styles from './index.module.scss';

function Blocks() {
  /* scrolls  */
  const handleScrollNext = e => {
    const containerBlocks = e.target.parentNode.childNodes[2];
    containerBlocks.scrollLeft += 50;
  };

  const handleScrollBack = e => {
    const containerBlocks = e.target.parentNode.childNodes[2];
    containerBlocks.scrollLeft -= 50;
  };

  const handleDragStart = e => {
    const element = e.target;
    if (element.classList.contains('containerBlockDrag')) {
      const { id } = e.target;
      e.dataTransfer.setData('text/plain', id);
      const child = element.childNodes[0];
      child.classList.add(styles.blockHijoGrande);
      element.classList.add(styles.blockGrande);
      setTimeout(() => {
        child.classList.remove(styles.blockHijoGrande);
        element.classList.remove(styles.blockGrande);
      }, 0);
    }
    console.log('start')
  };

  const handleDragEnd = e => {
    const element = e.target;
    const dragSuccess = e.dataTransfer.dropEffect;
    element.classList.remove(styles.blockActive);

    if (dragSuccess === 'move') {
      setTimeout(() => {
        element.classList.add(styles.blockActive);
        element.draggable = false;
      }, 0);
    }
  };
  return (
    <div className={styles.container}>
      <button type="button" onClick={handleScrollNext} className={styles.next} />
      <button type="button" onClick={handleScrollBack} className={styles.back} />
      <div className={styles.containerBlocks}>
        {blocks.map(block => (
          <Block
            key={block.id}
            id={block.id}
            number={block.number}
            points={block.points}
            color={block.color}
            broken={block.broken}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onMouseOver={() => ''}
            onMouseLeave={() => ''}
          />
        ))}

        {/* {Object.keys(transactions).map(transaction => (
          <Block
           key={transactions[transaction].uuid}
            uuid={transactions[transaction].uuid}
            number={transactions[transaction].puzzle_number}
            certified={transactions[transaction].certified}
            color={transactions[transaction].color}
            amount={Math.floor(transactions[transaction].amount)}
          />
        ))} */}
      </div>
    </div>
  );
}

export default Blocks;

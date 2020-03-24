import React from 'react';

import blocks from '../constants/blocks';

import Block from './components/Block';
import styles from './index.module.scss';

function Blocks({ transactions }) {
  const handleScrollNext = e => {
    const containerBlocks = e.target.parentNode.childNodes[2];
    containerBlocks.scrollLeft += 50;
  };

  const handleScrollBack = e => {
    const containerBlocks = e.target.parentNode.childNodes[2];
    containerBlocks.scrollLeft -= 50;
  };
  Object.keys(transactions).forEach(transaction => {
    console.log(transactions[transaction].color);
  });
  /* Dragevents  functions  */
  /*   const handleDragStart = e => {
    const elemento = e.target;
    const child = elemento.childNodes[0];
    child.classList.add(styles.blockHijoGrande);
    elemento.classList.add(styles.blockGrande);
    const newElement = elemento.cloneNode(true);
    elemento.classList.add(styles.blockActive);

    onBlockDrag(newElement);
    setTimeout(() => {
      child.classList.remove(styles.blockHijoGrande);
      elemento.classList.remove(styles.blockGrande);
    }, 0);
  };

  const handleDragEnd = e => {
    const elemento = e.target;
    const dragSuccess = e.dataTransfer.dropEffect;
    elemento.classList.remove(styles.blockActive);

    if (dragSuccess === 'move') {
      setTimeout(() => {
        elemento.classList.add(styles.blockActive);
        elemento.draggable = false;
      }, 0);
    }
  }; */

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleScrollNext} className={styles.next} />
      <button type="button" onClick={handleScrollBack} className={styles.back} />
      <div className={styles.containerBlocks}>
        {blocks.map(block => (
          <Block
            key={block.id}
            uuid={block.id}
            number={block.number}
            numberPoints={block.points}
            color={block.color}
            broken={block.broken}
            /* onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}  */
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

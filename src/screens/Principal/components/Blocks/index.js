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

  /* Drags Functions */
  const handleDragStart = e => {
    const element = e.target;
    if (element.classList.contains('containerBlockDrag')) {
      const { id } = element;
      const child = element.childNodes[0];
      const points = child.childNodes[0].childNodes.length;
      const number = child.childNodes[1].textContent;
      const color = child.classList[0].split('_')[1];
      const broken = !!element.childNodes[1];
      const dataBlock = { id, points, number, color, broken };
      e.dataTransfer.effectAllowed = 'move';
/*              e.dataTransfer.setData('text/plain', id);
 */       
      e.dataTransfer.setData('text/plain', JSON.stringify(dataBlock));

      element.classList.add(styles.bigBlock);
      child.classList.add(styles.childBigBlock);

      setTimeout(() => {
        element.classList.remove(styles.bigBlock);
        child.classList.remove(styles.childBigBlock);
      }, 0);
    }
  };

  const handleDragEnd = e => {
    const element = e.target;
    const dragSuccess = e.dataTransfer.dropEffect;

    element.classList.remove(styles.blockActive);

    if (dragSuccess === 'move') {
      setTimeout(() => {
        element.style.display = 'none';
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

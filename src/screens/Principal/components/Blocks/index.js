import React from 'react';
import PropTypes from 'prop-types';

import Block from './components/Block';
import styles from './index.module.scss';

function Blocks({ transactions }) {
  /* scrolls buttons */
  const handleScrollNext = e => {
    const containerBlocks = e.target.parentNode.childNodes[2];
    containerBlocks.scrollLeft += 50;
  };

  const handleScrollBack = e => {
    const containerBlocks = e.target.parentNode.childNodes[2];
    containerBlocks.scrollLeft -= 50;
  };

  /* scroll wheel mouse */
  const handleMouseOver = () => {
    document.getElementById('root').onwheel = () => false;
  };

  const handleMouseLeave = () => {
    document.getElementById('root').onwheel = () => true;
  };

  const handleWheel = e => {
    const element = e.target;
    const isBlock =
      element.classList.contains('blockDrag') || element.classList.contains('blockDragNoCertified');
    const containerBlocks = isBlock ? element.parentNode.parentNode : element;
    const { deltaY } = e;
    e.persist();

    if (deltaY > 0) {
      containerBlocks.scrollLeft -= 50;
    } else {
      containerBlocks.scrollLeft += 50;
    }
  };

  /* Drags Functions */
  const handleDragStart = e => {
    const element = e.target;
    if (element.classList.contains('containerBlockDrag')) {
      const { id } = element;
      const child = element.childNodes[0];

      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', id);

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
      <div
        className={styles.containerBlocks}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
      >
        {Object.keys(transactions).map(transaction => (
          <Block
            key={transactions[transaction].uuid}
            uuid={transactions[transaction].uuid}
            number={transactions[transaction].puzzle_number}
            certified={transactions[transaction].certified}
            color={transactions[transaction].color}
            fee={transactions[transaction].fee}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </div>
    </div>
  );
}

Blocks.propTypes = {
  transactions: PropTypes.instanceOf(Object).isRequired
};

export default Blocks;

import React from 'react';

import styles from './index.module.scss';
import Block from './components/Block';

function Blocks({ onBlockDrag }) {
  const handleScrollNext = e => {
    const containerBlocks = e.target.parentNode.childNodes[2];
    containerBlocks.scrollLeft += 50;
  };

  const hanldeScrollBack = e => {
    const containerBlocks = e.target.parentNode.childNodes[2];
    containerBlocks.scrollLeft -= 50;
  };

  const handleDragStart = e => {
    const elemento = e.target;
    const child = elemento.childNodes[0];
    onBlockDrag(elemento);
    child.classList.add(styles.blockHijoGrande);
    elemento.classList.add(styles.blockGrande);
    setTimeout(() => {
      elemento.classList.remove(styles.blockGrande);
      child.classList.remove(styles.blockHijoGrande);
    }, 0); 
  };

  const handleDragEnd = e => {
    const elemento = e.target;
    const dragSuccess = e.dataTransfer.dropEffect;
    const child = elemento.childNodes[0];

    console.log(dragSuccess)
    if (dragSuccess === 'move') {
      setTimeout(() => {
        child.classList.add(styles.blockHijoGrande);
        elemento.classList.add(styles.blockGrande);
      }, 0); } 
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleScrollNext} className={styles.next} />
      <button type="button" onClick={hanldeScrollBack} className={styles.back} />
      <div className={styles.containerBlocks}>
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />{' '}
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
        <Block onDragEnd={handleDragEnd} onDragStart={handleDragStart} />
      </div>
    </div>
  );
}

export default Blocks;

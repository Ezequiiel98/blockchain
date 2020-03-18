import React from 'react';

import styles from './index.module.scss';
import Block from './components/Block';

function Blocks() {
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
  
   

    
    child.classList.add(styles.blockHijoGrande);
    
    elemento.classList.add(styles.blockGrande);

    setTimeout(() => {
      elemento.classList.remove(styles.blockGrande);
      child.classList.remove(styles.blockHijoGrande);
      elemento.classList.add(styles.blockActive);

    }, 0);  

  };
  
/*   const handleDrag = e => {
    console.log('drag')
    
  }  */

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleScrollNext} className={styles.next} />
      <button type="button" onClick={hanldeScrollBack} className={styles.back} />
      <div className={styles.containerBlocks}>
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />   <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
        <Block onDragStart={handleDragStart} />
      </div>
    </div>
  );
}

export default Blocks;

import React from 'react';

import styles from './index.module.scss';
import Block from './components/Block';

function Blocks() {
  
//   const scroll = (e ) =>{
//         e.target.parentNode.scrollLeft += 50;
//     console.log(    e.target.parentNode)
//   }
//   const scrollA = (e ) =>{
//     e.target.parentNode.scrollLeft -= 50;
// console.log(    e.target.parentNode)
// }

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
  );
}

export default Blocks;

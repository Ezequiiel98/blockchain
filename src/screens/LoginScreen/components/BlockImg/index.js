import React from 'react';

import img from '../../assets/img/blockimg.svg';

import styles from './index.module.scss';

function BlockImg() {
  return (
    <div className={styles.blockImg}>
      <img src={img} className={styles.img} />
    </div>
  );
}
export default BlockImg;

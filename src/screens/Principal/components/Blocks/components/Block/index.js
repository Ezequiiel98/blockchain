import React from 'react';

import styles from './index.module.scss';

function Block({ onDragStart }) {


  return (
    <div className={styles.containerBlock} onDragStart={e => onDragStart(e)} draggable>
      <div className={styles.block}>
        <div className={styles.blockPoints}>
          <span className={`${styles.point} ${styles.point1}`} />
          <span className={`${styles.point} ${styles.point2}`} />
          <span className={`${styles.point} ${styles.point3}`} />
          <span className={`${styles.point} ${styles.point4}`} />
          <span className={`${styles.point} ${styles.point5}`} />
          <span className={`${styles.point} ${styles.point6}`} />
          <span className={`${styles.point} ${styles.point7}`} />
        </div>
        <h4 className={styles.blockNumber}>05</h4>
      </div>
    </div>
  );
}

export default Block;

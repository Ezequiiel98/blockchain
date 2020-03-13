import React from 'react';

import styles from './index.module.scss';

function Block() {
  return (
    <div className={styles.block}>
      <div className={styles.blockPoints}>
        <span className={`${styles.point} ${styles.point1}`} />
        <span className={`${styles.point} ${styles.point2}`} />
        <span className={`${styles.point} ${styles.point3}`} />
      </div>
      <h4 className={styles.blockNumber}>23</h4>
    </div>
  );
}

export default Block;
import React from 'react';

import styles from './index.module.scss';

function Score() {
  return (
    <div className={styles.container}>
      <div className={styles.containerScore}>
        <span className={styles.textScore}>Tu Puntaje</span>
        <span className={styles.iconContainer}>+</span>
        <span className={styles.score}>2175</span>
      </div>
    </div>
  );
}

export default Score;

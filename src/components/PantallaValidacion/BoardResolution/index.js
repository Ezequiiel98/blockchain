import React from 'react';

import styles from './index.module.scss';

function BoardResolution() {
  return (
    <div className={styles.container}>
      <div className={styles.containerBoard}>
        <h2 className={styles.legend}>Resolución</h2>
        <div className={styles.board}>
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
        </div>
      </div>
    </div>
  );
}

export default BoardResolution;

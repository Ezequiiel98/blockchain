import React from 'react';

import styles from './index.module.scss';

function Board() {
  return (
    <div className={styles.containerBoard}>
      <div className={styles.board}>
        <div className={styles.cell} >
          <span className={styles.number}>24</span>
        </div>
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
  );
}

export default Board;

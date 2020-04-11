import React from 'react';

import styles from './index.module.scss';

function Board() {
  const CELL_NUMBERS = 16;
  const renderCells = () =>
    [...Array(CELL_NUMBERS)].map(keyCell => (
      <div key={keyCell} className={styles.cell}>
        <span className={styles.number}>24</span>
      </div>
    ));

  return (
    <div className={styles.containerBoard}>
      <div className={styles.board}>{renderCells()}</div>
    </div>
  );
}

export default Board;

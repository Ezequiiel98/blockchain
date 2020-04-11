import React from 'react';

import styles from './index.module.scss';

function BoardResolution() {
  const CELL_NUMBERS = 16;
  const renderCells = () => [...Array(CELL_NUMBERS)].map(key => <div key={key} className={styles.cell} />);

  return (
    <div className={styles.containerBoard}>
      <h2 className={styles.legend}>Resolución</h2>
      <div className={styles.board}>{renderCells()}</div>
    </div>
  );
}

export default BoardResolution;

import React from 'react';

import { CELLS } from './constants/cells';
import styles from './index.module.scss';

function BoardResolution() {
  return (
    <div className={styles.containerBoard}>
      <h2 className={styles.legend}>Resolución</h2>
      <div className={styles.board}>
        {CELLS.map(keyCell => (
          <div key={keyCell} className={styles.cell} />
        ))}
      </div>
    </div>
  );
}

export default BoardResolution;

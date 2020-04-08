import React from 'react';

import { cells } from './constants/cells';
import styles from './index.module.scss';

function BoardResolution() {
  return (
    <div className={styles.containerBoard}>
      <h2 className={styles.legend}>Resolución</h2>
      <div className={styles.board}>
        {cells.map(keyCell => (
          <div key={keyCell} className={styles.cell} />
        ))}
      </div>
    </div>
  );
}

export default BoardResolution;

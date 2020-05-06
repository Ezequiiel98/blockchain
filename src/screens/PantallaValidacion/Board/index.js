import React from 'react';

import styles from './index.module.scss';

function Board({ allBlocksNumbers }) {
  return (
    <div className={styles.containerBoard}>
      <div className={styles.board}>
        {Object.keys(allBlocksNumbers).map(keyNumber => (
          <div key={keyNumber} className={styles.cell}>
            <span className={styles.number}>{allBlocksNumbers[keyNumber]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;

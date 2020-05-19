import React from 'react';

import { FIRST_COLUMNS, LAST_COLUMNS } from './constants/cells';
import styles from './index.module.scss';

function BoardResolution({ puzzle, firstBlocksNumbers }) {
  const puzzleColors = [];
  const allPuzzleColors = ['red', 'yellow', 'blue', 'lightblue', 'green'];
  const LENGTH_COLORS = allPuzzleColors.length;

  Object.keys(puzzle).forEach(columnColors =>
    puzzle[columnColors].forEach(rowColor => puzzleColors.push(rowColor))
  );

  return (
    <div className={styles.containerBoard}>
      <h2 className={styles.legend}>Resolución</h2>
      <div className={styles.board}>
        <div className={styles.column}>
          {FIRST_COLUMNS.map(keyCell => (
            <div key={keyCell} className={styles[puzzleColors[keyCell]]} />
          ))}
        </div>
        <div className={styles.column}>
          {LAST_COLUMNS.map(keyCell => (
            <div
              key={keyCell}
              className={
                firstBlocksNumbers[keyCell]
                  ? styles[allPuzzleColors[firstBlocksNumbers[keyCell] % LENGTH_COLORS]]
                  : styles.gray
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoardResolution;

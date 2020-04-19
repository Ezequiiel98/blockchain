import React from 'react';

import { FIRST_COLUMNS, LAST_COLUMNS } from './constants/cells';
import styles from './index.module.scss';

function BoardResolution({ puzzle, blocksNumbers }) {
  const puzzleColors = [];
  const allPuzzleColors = ['red', 'yellow', 'blue', 'lightblue', 'green'];
  const lengthColors = allPuzzleColors.length;

  Object.keys(puzzle).forEach(columnColors =>
    puzzle[columnColors].forEach(rowColor => puzzleColors.push(rowColor))
  );
  console.log(puzzleColors);
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
                blocksNumbers[keyCell]
                  ? styles[allPuzzleColors[blocksNumbers[keyCell] % lengthColors]]
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

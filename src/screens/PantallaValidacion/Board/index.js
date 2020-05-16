import React from 'react';

import { BOARD_CELLS } from './constants/boardCells';
import styles from './index.module.scss';

function blocksApi(allBlocksNumbers) {
  return allBlocksNumbers.map((row, indexRow) =>
    row.map((cell, indexCell) => (
      <div key={BOARD_CELLS[indexRow][indexCell]} className={styles[cell[1]]}>
        <span className={styles.number}>{cell[0]}</span>
      </div>
    ))
  );
}

function blocksUser(allBlocksNumbers) {
  return BOARD_CELLS.map(keyNumber => (
    <div key={keyNumber} className={styles[allBlocksNumbers[keyNumber].colorBlock]}>
      <span className={styles.number}>{allBlocksNumbers[keyNumber].numberBlock}</span>
    </div>
  ));
}

function Board({ allBlocksNumbers, user }) {
  return (
    <div className={styles.containerBoard}>
      <div className={styles.board}>{user ? blocksUser(allBlocksNumbers) : blocksApi(allBlocksNumbers)}</div>
    </div>
  );
}

export default Board;


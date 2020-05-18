import React from 'react';

import { BOARD_CELLS } from '../../constants/boardCells';

import styles from './index.module.scss';

const blocksApi = allBlocksNumbers =>
  allBlocksNumbers.map((row, indexRow) =>
    row.map((cell, indexCell) => (
      <div key={BOARD_CELLS[indexRow][indexCell]} className={styles[cell[1]]}>
        <span className={styles.number}>{cell[0]}</span>
      </div>
    ))
  );

const blocksUser = allBlocksNumbers =>
  BOARD_CELLS.map(keyNumber => (
    <div key={keyNumber} className={styles[allBlocksNumbers[keyNumber].colorBlock]}>
      <span className={styles.number}>{allBlocksNumbers[keyNumber].numberBlock}</span>
    </div>
  ));

export default function Blocks({ allBlocksNumbers, userMined }) {
  return userMined ? blocksUser(allBlocksNumbers) : blocksApi(allBlocksNumbers);
}

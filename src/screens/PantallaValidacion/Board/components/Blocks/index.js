import React from 'react';

import { BOARD_CELLS } from '../../constants/boardCells.js';

import styles from './index.module.scss';

export default function Blocks({ allBlocksNumbers }) {
  const key = new Date();

  return(
    allBlocksNumbers.map(row =>
      row.map(cell => (
        <div key={key.getTime() * Math.random()} className={styles[cell[1]]}>
          <span className={styles.number}>{cell[0]}</span>
        </div>
      ))
    )
  );
};

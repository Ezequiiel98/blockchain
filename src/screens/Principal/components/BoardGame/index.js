import React from 'react';

import boardCells from '../constants/boardCells.js';

import styles from './index.module.scss';

function BoardGame({ blockDrag }) {
  /*   const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDragEnter = e => {
    e.preventDefault();
    e.target.classList.add(styles.cellDragHover);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    e.target.classList.remove(styles.cellDragHover);
  };

  const handleDragDrop = e => {
    e.target.appendChild(blockDrag);
    e.target.classList.remove(styles.cellDragHover);
  }; */

  return (
    <div className={styles.board}>

      {boardCells.map(cell => (
        /* row */
        <div className={styles.rowCell} key={cell.idRow} id={cell.idRow}>
          {cell.idColumns.map(idColumn => (
            /* columns  */
            <div className={styles.columnCell} key={idColumn} id={idColumn} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default BoardGame;

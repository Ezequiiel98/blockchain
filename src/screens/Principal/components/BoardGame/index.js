import React from 'react';

import styles from './index.module.scss';

function BoardGame({ blockDrag, blockClass }) {
  const handleDragOver = e => {
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
  };

  return (
    <div className={styles.board}>
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
      <div
        className={styles.cell}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
        onDrop={e => handleDragDrop(e)}
      />
    </div>
  );
}

export default BoardGame;

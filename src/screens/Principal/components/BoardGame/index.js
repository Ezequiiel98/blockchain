import React, { cloneElement } from 'react';

import boardCells from '../constants/boardCells.js';

import styles from './index.module.scss';

function BoardGame({ blockDrag }) {
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
  const handleDrop = e => {
    /* const id = e.dataTransfer.getData('text');
    const element = document.getElementById(id) || false ;
    const dataElement = element ? element.attributes['data-drag'] : false;
    const elementClone = element.cloneNode(true)
    if (dataElement) {
     console.log( e.target.id.split("_"))
      e.target.classList.remove(styles.cellDragHover);
      console.log(element);
      e.target.appendChild(elementClone)
    } */

    if (e.target.classList.contains('dragZone')) {
      console.log('dragzone');
      const { id, style } = JSON.parse(e.dataTransfer.getData('text'));
      const element = document.getElementById(id);
      const elementClone = element.cloneNode(true);
      e.target.appendChild(elementClone);
      elementClone.style.width = '112px'
      elementClone.childNodes[0].style.width = '112px'
      elementClone.style.height = '112px'
      elementClone.childNodes[0].style.height = '112px'

      elementClone.style.marginLeft = '0'
    } else if (e.target.classList.contains('block')) {
      const { id, style } = JSON.parse(e.dataTransfer.getData('text'));
      console.log(style);
      const element = document.getElementById(id);
      const elementClone = element.cloneNode(true);
      console.log('blok');
      e.target.parentNode.parentNode.appendChild(elementClone);
      const primerElementoId = e.target.parentNode.parentNode.childNodes[0].id;
      console.log(e.target.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.childNodes[0]));
      const elementoPrimer = document.getElementById(primerElementoId);
      elementoPrimer.classList.remove(style)
      elementoPrimer.draggable = true;
      elementClone.style.width = '112px'
      elementClone.childNodes[0].style.width = '112px'
      elementClone.style.height = '112px'
      elementClone.childNodes[0].style.height = '112px'
      elementClone.style.marginLeft = '0'
    }
  };

  return (
    <div className={styles.board}>
      {boardCells.map(cell => (
        /* row */
        <div className={styles.rowCell} key={cell.idRow} id={cell.idRow}>
          {cell.idColumns.map(idColumn => (
            /* columns  */
            <div
              className={`${styles.columnCell} dragZone`}
              key={idColumn}
              id={idColumn}
              onDragOver={e => handleDragOver(e)}
              onDragEnter={e => handleDragEnter(e)}
              onDragLeave={e => handleDragLeave(e)}
              onDrop={e => handleDrop(e)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default BoardGame;

/*
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
  }; */

import React from 'react';

import boardCells from '../constants/boardCells.js';
import blocks from '../constants/blocks';
import Block from '../Blocks/components/Block';

import styles from './index.module.scss';

class BoardGame extends React.Component {
  state = {
    element: '',
    key: 0,
    row: '',
    column: '',
    myState: {}
  };

  getBlock = (id, elements) => {
    const myState = { ...this.state.myState };
    const row = elements[0];
    const column = [elements[1]];
    myState[row] = { [column]: id };
    const obj = {};
    const mio = Object.keys(this.state.myState).map(
      elemento => new Object({ [row]: this.state.myState[elemento] })
    );
    console.log(mio);
    this.setState({ element: blocks.filter(block => block.id === parseInt(id)), myState, row, column });
  };

  handleDragOver = e => {
    e.preventDefault();
  };

  handleDragEnter = e => {
    e.preventDefault();
    e.target.classList.add(styles.cellDragHover);
  };

  handleDragLeave = e => {
    e.preventDefault();
    e.target.classList.remove(styles.cellDragHover);
  };

  handleDrop = e => {
    e.preventDefault();
  /*   const elements = e.target.id.split('_');
    const { id, style } = JSON.parse(e.dataTransfer.getData('text'));
    this.getBlock(id, elements); */

 if (e.target.classList.contains('dragZone')) {
      console.log('dragzone');
      const { id, style } = JSON.parse(e.dataTransfer.getData('text'));
      const element = document.getElementById(id);
      const elementClone = element.cloneNode(true);
      e.target.appendChild(elementClone);
      elementClone.style.width = '115px';
      elementClone.childNodes[0].style.width = '114px';
      elementClone.style.height = '114px';
      elementClone.childNodes[0].style.height = '115px';

      elementClone.style.marginLeft = '-2px';
       elementClone.style.marginTop = '-2px'
      elementClone.style.borderRadius = '0';
      elementClone.style.border = '2px solid #fff';
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
      elementoPrimer.classList.remove(style);
      elementoPrimer.draggable = true;
      elementClone.style.width = '115px';
      elementClone.childNodes[0].style.width = '115px';
      elementClone.style.height = '114px';
      elementClone.childNodes[0].style.height = '114px';
      elementClone.style.marginLeft = '-2px';
       elementClone.style.marginTop = '-2px'
      elementClone.style.borderRadius = '0';
      elementClone.style.border = '2px solid #fff';
    }
  };
  

  render() {
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
                onDragOver={e => this.handleDragOver(e)}
                onDragEnter={e => this.handleDragEnter(e)}
                onDragLeave={e => this.handleDragLeave(e)}
                onDrop={e => this.handleDrop(e)}
              >
{/*                 <Block {...nose[0]} />
 */}              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
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

/*
    drop aca
    const id = e.dataTransfer.getData('text');
    const element = document.getElementById(id) || false ;
    const dataElement = element ? element.attributes['data-drag'] : false;
    const elementClone = element.cloneNode(true)
    if (dataElement) {
     console.log( e.target.id.split("_"))
      e.target.classList.remove(styles.cellDragHover);
      console.log(element);
      e.target.appendChild(elementClone)
    } */



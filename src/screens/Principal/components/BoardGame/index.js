import React from 'react';

import boardCells from '../constants/boardCells';
import blocks from '../constants/blocks';
import Block from '../Blocks/components/Block';

import styles from './index.module.scss';

class BoardGame extends React.Component {
  state = {
    data: ''
  };

  handleDragStart = e => {
    const { id } = e.target;
    const lastColumn = Object.keys(this.state).filter(value => this.state[value] === id)[0];
    e.dataTransfer.setData('text/plain', id);
    setTimeout(() => {
      this.setState({ [lastColumn]: '' });
    }, 0);
  };

  handleDragEnd = e => {
    const elemento = e.target;
    // const dragSuccess = e.dataTransfer.dropEffect;
    /*     elemento.classList.remove(styles.blockActive);
     */
    /* if (dragSuccess === 'move') {
      setTimeout(() => {
        // elemento.classList.add(styles.blockActive);
        // elemento.draggable = false;
      }, 0);
    } */
  };

  handleDragOver = e => {
    e.preventDefault();
 /*    if (e.target.classList.contains('containerBlockDrag')) {
      e.target.style.zIndex = '-5';
    } */
  };

  handleDragEnter = e => {
    e.preventDefault();
    e.target.classList.add(styles.cellDragHover);

   
  };

  handleDragLeave = e => {
    e.preventDefault();
    e.target.classList.remove(styles.cellDragHover);
   
  };

  getBlock = (id, elements) => {
    const data = { ...this.state.data };
    data[elements] = blocks.filter(block => block.id === parseInt(id))[0];
    this.setState({ ...this.prevState, [elements]: id, data });
  };

  handleDrop = e => {
    e.preventDefault();
    const elements = e.target.id;
    const id = e.dataTransfer.getData('text');
    this.getBlock(id, elements);
    e.target.classList.remove(styles.cellDragHover);
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
                {this.state[idColumn] && (
                  <Block
                    {...this.state.data[idColumn]}
                    onDragStart={e => this.handleDragStart(e)}
                    onDragEnd={e => this.handleDragEnd(e)}
                    bigBlock
                  />
                )}
              </div>
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

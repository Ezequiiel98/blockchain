import React from 'react';

import boardCells from '../constants/boardCells';
import blocks from '../constants/blocks';
import Block from '../Blocks/components/Block';

import styles from './index.module.scss';

class BoardGame extends React.Component {
  state = {
    dataBlocks: '',
    dataBoardPositions: '',
    lastColumnTemp: ''
  };

  handleDragStart = e => {
    const { id } = e.target;
    const dataBlocks = { ...this.state.dataBlocks };
    const dataBoardPositions = { ...this.state.dataBoardPositions };

    const [lastColumn] = Object.keys(dataBoardPositions).filter(
      columnId => dataBoardPositions[columnId] === id
    );

    e.dataTransfer.setData('text/plain', id);

    const lastColumnTemp = e.target.parentNode.id;
    /* Borra los datos del state de la celda donde estaba posicionado el block antes de moverlo*/
    dataBlocks[lastColumn] = '';
    dataBoardPositions[lastColumn] = '';
    setTimeout(() => {
      this.setState({ dataBoardPositions, dataBlocks, lastColumnTemp });
    }, 0);
  };

  getBlock = (idBlock, idColumn) => {
    const { state } = this;
    const dataBlocks = { ...state.dataBlocks };
    const dataBoardPositions = { ...state.dataBoardPositions };

    [dataBlocks[idColumn]] = blocks.filter(block => block.id === parseInt(idBlock));
    dataBoardPositions[idColumn] = idBlock;
    // const [row, column] = idColumn.split('_');
    this.setState({
      ...this.prevState,
      dataBoardPositions,
      dataBlocks
    });
  };

  clearCell = idColumn => {
    const { state } = this;
    const dataBlocks = { ...state.dataBlocks };
    const dataBoardPositions = { ...state.dataBoardPositions };

    dataBlocks[idColumn] = '';
    dataBoardPositions[idColumn] = '';
    this.setState({ dataBlocks, dataBoardPositions });
  };

  handleDragEnd = e => {
 
    console.log('end')
    /*     elemento.classList.remove(styles.blockActive);
     */
    /*
    const elemento = e.target;
      setTimeout(() => {
        // elemento.classList.add(styles.blockActive);
        // elemento.draggable = false;
      }, 0);
    } */
  };

  handleDragOver = e => {
    e.preventDefault();
  };

  handleDragEnter = e => {
    e.preventDefault();
    const element = e.target;
    element.classList.add(styles.cellDragHover);
    const isBlock = element.classList.contains('blockDrag');

    if (isBlock) {
      this.getBlock(e.target.parentNode.id, this.state.lastColumnTemp);
    } else {
      this.clearCell(this.state.lastColumnTemp);
    }
  };

  handleDragLeave = e => {
    e.preventDefault();
    e.target.classList.remove(styles.cellDragHover);
  };

  handleDrop = e => {
    e.preventDefault();
    const element = e.target;
    const isColumn = element.classList.contains('columnDrag');
    const idColumn = isColumn ? element.id : element.parentNode.parentNode.id;
    const idBlock = e.dataTransfer.getData('text');

    this.getBlock(idBlock, idColumn);

    element.classList.remove(styles.cellDragHover);
    const dragSuccess = e.dataTransfer.dropEffect;
    console.log(dragSuccess)
    this.setState({ lastColumnTemp: '' });
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
                className={`${styles.columnCell} columnDrag`}
                key={idColumn}
                id={idColumn}
                onDragOver={e => this.handleDragOver(e)}
                onDragEnter={e => this.handleDragEnter(e)}
                onDragLeave={e => this.handleDragLeave(e)}
                onDrop={e => this.handleDrop(e)}
              >
                {this.state.dataBlocks[idColumn] && (
                  <Block
                    {...this.state.dataBlocks[idColumn]}
                    onDragStart={this.handleDragStart}
                    onDragEnd={this.handleDragEnd}
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

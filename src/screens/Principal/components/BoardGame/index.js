import React from 'react';

import boardCells from '../constants/boardCells';
import blocks from '../constants/blocks';
import Block from '../Blocks/components/Block';

import styles from './index.module.scss';

class BoardGame extends React.Component {
  state = {
    dataBlocks: {},
    dataBoardPositions: {},
    lastColumnTemp: '',
    lastIdTemp: '',
    noUpdate: true
  };

  countFillCells = () => {
    const numberColumns = 16;
    const dataBoardPositions = { ...this.state.dataBoardPositions };
    /*  let positions = Object.keys(dataBoardPositions).map(columnId => {
      const [row, column] = columnId.split('_');

        return dataBoardPositions !== ''  && { [row]: { [column]: dataBoardPositions[columnId] } };

      return { [columnId]: dataBoardPositions[columnId] };
    }); */
    const positions = Object.keys(dataBoardPositions).filter(columnId => dataBoardPositions[columnId] !== '');

    if (positions.length === numberColumns) {
      this.props.onDisabledButton({ disable: false });
    } else {
      this.props.onDisabledButton({ disable: true });
    }
    console.log(positions);
  };

  getBlock = (idBlock, idColumn) => {
    if (idColumn !== '') {
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
    }
  };

  clearCell = idColumn => {
    if (idColumn !== '') {
      const { state } = this;
      const dataBlocks = { ...state.dataBlocks };
      const dataBoardPositions = { ...state.dataBoardPositions };
      dataBlocks[idColumn] = '';
      dataBoardPositions[idColumn] = '';
      this.setState({ dataBlocks, dataBoardPositions });
    }
  };

  /* DragBlock */
  handleDragStart = e => {
    const { id } = e.target;
    const dataBlocks = { ...this.state.dataBlocks };
    const dataBoardPositions = { ...this.state.dataBoardPositions };

    const [lastColumn] = Object.keys(dataBoardPositions).filter(
      columnId => dataBoardPositions[columnId] === id
    );

    e.dataTransfer.setData('text/plain', id);

    const lastColumnTemp = e.target.parentNode.id;
    const lastIdTemp = e.target.id;

    /* Borra los datos del state de la celda donde estaba posicionado el block antes de moverlo*/
    dataBlocks[lastColumn] = '';
    dataBoardPositions[lastColumn] = '';
    setTimeout(() => {
      this.setState({ dataBoardPositions, dataBlocks, lastColumnTemp, lastIdTemp });
    }, 0);

    this.setState({ noUpdate: true });
  };

  handleDragEnd = e => {
    console.log('end');
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

  /* drag Column cell */
  handleDragOver = async e => {
    e.preventDefault();
    const element = e.target;
    const isBlock = element.classList.contains('blockDrag');
    const idBlock = element.parentNode.id;
    const idColumn = element.parentNode.parentNode.id;
    const { lastColumnTemp } = this.state;

    element.classList.add(styles.cellDragHover);

    if (isBlock) {
      await this.getBlock(idBlock, lastColumnTemp);
    } else {
      await this.clearCell(lastColumnTemp);
    }
    this.setState({ noUpdate: true });
  };

  handleDragEnter = e => {
    e.preventDefault();
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
    this.setState({ lastColumnTemp: '', lastIdTemp: '', noUpdate: false });

    element.classList.remove(styles.cellDragHover);
    /*    const dragSuccess = e.dataTransfer.dropEffect;
    console.log(dragSuccess); */
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dataBoardPositions !== this.state.dataBoardPositions && this.state.noUpdate !== true) {
      setTimeout(() => {
        this.countFillCells();
      }, 1000);
    }
  }

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
                {/* block */}
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

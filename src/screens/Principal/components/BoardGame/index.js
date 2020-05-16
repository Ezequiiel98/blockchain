import React from 'react';
import PropTypes from 'prop-types';

import BOARD_CELLS from '../constants/boardCells';
import Block from '../Blocks/components/Block';

import styles from './index.module.scss';

class BoardGame extends React.Component {
  state = {
    dataBlocks: {},
    dataBoardPositions: {},
    firstBlocksNumbers: {},
    allBlocksNumbers: {},
    lastColumnTemp: '',
    updateCount: false
  };

  countFullColumns = () => {
    const NUMBER_COLUMNS = 16;
    const dataBoardPositions = { ...this.state.dataBoardPositions };
    const { firstBlocksNumbers, allBlocksNumbers } = this.state;
    const boardFullPositions = Object.keys(dataBoardPositions)
      .map(columnId => {
        const [row, column] = columnId.split('_');
        return dataBoardPositions[columnId] !== '' && { [row]: { [column]: dataBoardPositions[columnId] } };
      })
      .filter(position => position !== false);

    if (boardFullPositions.length === NUMBER_COLUMNS) {
      const orderedPositions = this.orderPositions(boardFullPositions);
      this.props.onDisabledButton({ disabled: false });
      this.props.onPositions(orderedPositions);
      console.log(boardFullPositions)
    } else {
      this.props.onDisabledButton({ disabled: true });
    }

    this.props.onBlocksNumbers({ firstBlocksNumbers, allBlocksNumbers });
  };

  orderPositions = boardFullPositions => {
    const orderedPositions = {
      'row-0': {
        'column-0': '',
        'column-1': '',
        'column-2': '',
        'column-3': ''
      },
      'row-1': {
        'column-0': '',
        'column-1': '',
        'column-2': '',
        'column-3': ''
      },
      'row-2': {
        'column-0': '',
        'column-1': '',
        'column-2': '',
        'column-3': ''
      },
      'row-3': {
        'column-0': '',
        'column-1': '',
        'column-2': '',
        'column-3': ''
      }
    };

    boardFullPositions.forEach(boardPosition =>
      Object.keys(boardPosition).forEach(rowPosition =>
        Object.keys(boardPosition[rowPosition]).forEach(columnPosition => {
          orderedPositions[rowPosition][columnPosition] = boardPosition[rowPosition][columnPosition];
        })
      )
    );
    return orderedPositions;
  };

  getBlock = (idBlock, idColumn) => {
    if (idColumn !== '') {
      let { dataBlocks, dataBoardPositions, firstBlocksNumbers, allBlocksNumbers } = this.state;
      let { transactions } = this.props;
      console.log(allBlocksNumbers);
      dataBlocks = { ...dataBlocks };
      dataBoardPositions = { ...dataBoardPositions };
      firstBlocksNumbers = { ...firstBlocksNumbers };
      allBlocksNumbers = { ...allBlocksNumbers };
      console.log(allBlocksNumbers);

      transactions = JSON.stringify(transactions);
      [dataBlocks[idColumn]] = JSON.parse(transactions).filter(transaction => transaction.uuid === idBlock);
      dataBoardPositions[idColumn] = idBlock;

      if (idColumn.includes('column-0') || idColumn.includes('column-1')) {
        firstBlocksNumbers[idColumn] = dataBlocks[idColumn].puzzle_number;
      }

      allBlocksNumbers[idColumn] = {
        numberBlock: dataBlocks[idColumn].puzzle_number,
        colorBlock: dataBlocks[idColumn].color
      };

      this.setState({
        ...this.prevState,
        dataBoardPositions,
        dataBlocks,
        firstBlocksNumbers,
        allBlocksNumbers
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
    const lastColumnTemp = e.target.parentNode.id;
    const dataBlocks = { ...this.state.dataBlocks };
    const dataBoardPositions = { ...this.state.dataBoardPositions };
    const firstBlocksNumbers = { ...this.state.firstBlocksNumbers };
    const [lastColumn] = Object.keys(dataBoardPositions).filter(
      columnId => dataBoardPositions[columnId] === id
    );

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', id);

    /* Borra los datos del state de la celda donde estaba posicionado el block antes de moverlo*/
    dataBlocks[lastColumn] = '';
    dataBoardPositions[lastColumn] = '';
    firstBlocksNumbers[lastColumn] = '';
    setTimeout(() => {
      this.setState({ dataBoardPositions, dataBlocks, firstBlocksNumbers, lastColumnTemp });
    }, 0);
  };

  /* drag Column cell */
  handleDragOver = e => {
    e.preventDefault();
    const element = e.target;
    const isBlock = element.classList.contains('blockDrag');
    const idBlock = element.parentNode.id;
    const { lastColumnTemp } = this.state;

    element.classList.add(styles.cellDragHover);

    if (isBlock) {
      this.getBlock(idBlock, lastColumnTemp);
    } else {
      this.clearCell(lastColumnTemp);
    }
    this.setState({ updateCount: false });
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
    const { effectAllowed } = e.dataTransfer;

    if (effectAllowed === 'move') {
      const idBlock = e.dataTransfer.getData('text');
      this.getBlock(idBlock, idColumn);
      this.setState({ lastColumnTemp: '', updateCount: true });
    }

    element.classList.remove(styles.cellDragHover);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dataBoardPositions !== this.state.dataBoardPositions && this.state.updateCount) {
      this.countFullColumns();
    }
  }

  render() {
    return (
      <div className={styles.board}>
        {BOARD_CELLS.map(cell => (
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
                    number={this.state.dataBlocks[idColumn].puzzle_number}
                    onDragStart={this.handleDragStart}
                    onDragEnd={() => null}
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

BoardGame.propTypes = {
  transactions: PropTypes.instanceOf(Object).isRequired,
  onDisabledButton: PropTypes.func.isRequired,
  onPositions: PropTypes.func.isRequired,
  onBlocksNumbers: PropTypes.func.isRequired
};

export default BoardGame;

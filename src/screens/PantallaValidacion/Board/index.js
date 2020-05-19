import React from 'react';

import Blocks from './components/Blocks'
import styles from './index.module.scss';

function Board(props) {
  return (
    <div className={styles.containerBoard}>
      <div className={styles.board}>
        <Blocks {...props} />
      </div>
    </div>
  );
}

export default Board;

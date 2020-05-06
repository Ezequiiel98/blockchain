import React from 'react';

import BoardResolution from '../../components/BoardResolution';
import Score from '../../components/Score';

import ImageLineas from './ImageLineas';
import Board from './Board';
import Text from './Text';
import styles from './index.module.scss';
import Buttons from './Buttons';

function PantallaValidacion({
  location: {
    state: { allBlocksNumbers, puzzle, firstBlocksNumbers, score }
  }
}) {
  console.log(allBlocksNumbers, puzzle, firstBlocksNumbers, score);
  return (
    <div className={styles.pantallaValidacion}>
      <ImageLineas />
      <div className={styles.container}>
        <div className={styles.containerTextScore}>
          <Text />
          <Score />
        </div>
        <div className={styles.containerBoard}>
          <Board allBlocksNumbers={allBlocksNumbers} />
          <div className={styles.containerButton}>
            <BoardResolution puzzle={puzzle} firstBlocksNumbers={firstBlocksNumbers} />
            <div className={styles.buttons}>
              <Buttons />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.inferior}>
          <ImageLineas />
        </div>
      </div>
    </div>
  );
}
export default PantallaValidacion;

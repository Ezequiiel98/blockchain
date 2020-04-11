import React from 'react';

import BoardResolution from '../../components/BoardResolution';
import Score from '../../components/Score';

import ImageLineas from './ImageLineas';
import Board from './Board';
import Text from './Text';
import styles from './index.module.scss';
import Buttons from './Buttons';

function PantallaValidacion() {
  return (
    <div className={styles.pantallaValidacion}>
      <ImageLineas />
      <div className={styles.container}>
        <div className={styles.containerTextScore}>
          <Text />
          <Score />
        </div>
        <div className={styles.containerBoard}>
          <Board />
          <div className={styles.containerButton}>
            <BoardResolution />
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

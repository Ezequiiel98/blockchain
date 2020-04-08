import React from 'react';

import Board from './Board';
import BoardResolution from './BoardResolution';
import ImagenSuperior from './ImagenSuperior';
import Score from './Score';
import Text from './Text';
import ImagenInferior from './ImagenInferior';
import styles from './index.module.scss';
import RedButton from './RedButton';
import GreenButton from './GreenButton';

function PantallaValidacion() {
  return (
    <div className={styles.pantallaValidacion}>
      <ImagenSuperior />

      <div className={styles.container}>
        <div className={styles.containerTextScore}>
          <Text />
          <Score />
        </div>
        <div className={styles.containerBoard}>
          <Board />
          <div className={styles.containerButton}>
            <BoardResolution />
            <div className={styles.button}>
              <RedButton />
              <GreenButton />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ImagenInferior />
      </div>
    </div>
  );
}
export default PantallaValidacion;

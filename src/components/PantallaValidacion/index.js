import React from 'react';

import Board from './Board';
import BoardResolution from './BoardResolution';
import ImagenSuperior from './ImagenSuperior';
import Score from './Score';
import Text from './Text';
import RedButton from './RedButton';
import GreenButton from './GreenButton';
import ImagenInferior from './ImagenInferior';
import styles from './index.module.scss';

function PantallaValidacion() {
  return (
    <div className={styles.PantallaValidacion}>
      <ImagenSuperior />

      <div className={styles.ContainerTextScore}>
        <Score />
        <Text />
        <div className={styles.containerBoard}>
          <Board />
          <BoardResolution />
          {/* <RedButton />
          <GreenButton /> */}
        </div>
      </div>

      <div>
        <ImagenInferior />
      </div>
    </div>
  );
}
export default PantallaValidacion;

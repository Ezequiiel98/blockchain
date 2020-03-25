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
        <div className={styles.Text}>
          <Text />
        </div>
        <div className={styles.Score}>
          <Score />
        </div>
     </div>

      <div className={styles.ContainerBoardBoardResolutionButton}>
        <div>
          <Board />
        </div>

       <div className={styles.ContainerBoardResolutionButton}>
        <div>
          <BoardResolution />
        </div>

       <div className={styles.ContainerButton}>
        <div>
          <RedButton />
        </div>

        <div>
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

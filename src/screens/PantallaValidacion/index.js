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
    state: {
      blockToValidate: { puzzle, signature, voting_id, user, firstBlocksNumbers }
    }
  }
}) {
  const firstBlocksNumbersApi = {};
  /* Si este no es el usuario que mino el bloque, creo el objeto con los primeros numeros para colorear las ultimas columnas del tablero de resolucion*/
  if (!firstBlocksNumbers) {
    puzzle.forEach((row, indexRow) =>
      row.forEach((column, indexColumn) => {
        if (indexColumn === 0 || indexColumn === 1) {
          firstBlocksNumbersApi[`row-${indexRow}_column-${indexColumn}`] = column[0];
        }
      })
    );
  }

  return (
    <div className={styles.pantallaValidacion}>
      <ImageLineas />
      <div className={styles.container}>
        <div className={styles.containerTextScore}>
          <Text />
          <Score /* score={score}*/ />
        </div>
        <div className={styles.containerBoard}>
          <Board allBlocksNumbers={puzzle} user={user} />
          <div className={styles.containerButton}>
            <BoardResolution
              puzzle={signature}
              firstBlocksNumbers={firstBlocksNumbers || firstBlocksNumbersApi}
            />

            <div className={styles.buttons}>
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PantallaValidacion;

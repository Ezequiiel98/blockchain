import React from 'react';
import PropTypes from 'prop-types';

import { sendVote } from '../../services/votingService';
import BoardResolution from '../../components/BoardResolution';
import Score from '../../components/Score';

import ImageLineas from './ImageLineas';
import Board from './Board';
import Text from './Text';
import styles from './index.module.scss';
import Buttons from './Buttons';

function PantallaValidacion(props) {
  const {
    puzzle,
    signature,
    voting_id,
    userMined,
    firstBlocksNumbers,
    score,
    miner,
    blockchain
  } = props.location.state.blockToValidate;
console.log(props)
  const firstBlocksNumbersApi = {};
  /* Si este no es el usuario que mino el bloque, creo el objeto con los primeros numeros para colorear las ultimas columnas del tablero de resolucion*/
  if (!userMined) {
    puzzle.forEach((row, indexRow) =>
      row.forEach((column, indexColumn) => {
        if (indexColumn === 0 || indexColumn === 1) {
          firstBlocksNumbersApi[`row-${indexRow}_column-${indexColumn}`] = column[0];
        }
      })
    );
  }

  const handleClick = async commit => {
    const data = {
      blockchain: { id: blockchain.id },
      commit,
      miner: { score, uuid: miner.uuid },
      voting: { voting_id }
    };
    const res = await sendVote(data);
    console.log(res, res.data, res.status, data);
    props.history.goBack()
  };

  return (
    <>
      {userMined && <div className={styles.coversScreen} />}
      <div className={styles.pantallaValidacion}>
        <ImageLineas />
        <div className={styles.container}>
          <div className={styles.containerTextScore}>
            <Text name={userMined ? 'Tus compañeros estan verificando tu bloque' : miner.name} />
            <Score score={score} />
          </div>
          <div className={styles.containerBoard}>
            <Board allBlocksNumbers={puzzle} userMined={userMined} />
            <div className={styles.containerButton}>
              <BoardResolution
                puzzle={signature}
                firstBlocksNumbers={firstBlocksNumbers || firstBlocksNumbersApi}
              />

              <div className={styles.buttons}>
                <Buttons onClick={handleClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

PantallaValidacion.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};

export default PantallaValidacion;

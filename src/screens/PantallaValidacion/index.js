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
    score,
    miner,
    blockchain
  } = props.location.state.blockToValidate;
 
  const firstBlocksNumbersApi = {};
  
  puzzle.forEach((row, indexRow) =>
    row.forEach((column, indexColumn) => {
    if (indexColumn === 0 || indexColumn === 1) {
      firstBlocksNumbersApi[`row-${indexRow}_column-${indexColumn}`] = column[0];
     }
    })
  );
  
  const handleClick = async commit => {
    const data = {
      blockchain: { id: blockchain.id },
      commit,
      miner: { score, uuid: miner.uuid },
      voting: { voting_id }
    };

    await sendVote(data);
    
    props.history.goBack()
  };

  return (
    <>
      <div className={styles.pantallaValidacion}>
        <ImageLineas />
        <div className={styles.container}>
          <div className={styles.containerTextScore}>
            <Text name={miner.name} />
            <Score score={score} />
          </div>
          <div className={styles.containerBoard}>
            <Board allBlocksNumbers={puzzle} />
            <div className={styles.containerButton}>
              <BoardResolution
                puzzle={signature}
                firstBlocksNumbers={firstBlocksNumbersApi}
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

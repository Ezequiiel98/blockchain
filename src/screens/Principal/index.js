import React from 'react';
import PropTypes from 'prop-types';

import { fetchGame, setNews } from '../../services/gameService';
import { sendBlocks } from '../../services/blockService';
import PopUpVotation from '../PopUpVotacion';

import Header from './components/Header';
import Blocks from './components/Blocks';
import BoardGame from './components/BoardGame';
import Resolution from './components/Resolution';
import styles from './index.module.scss';

class Principal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      transactions: {},
      miner: {},
      blockchain: {},
      currentPuzzle: {},
      allBlocksNumbers: {},
      firstBlocksNumbers: {},
      orderedPositions: {},
      blockToValidate: {},
      score: 0,
      disabled: true,
      votation: false,
      clearBoard: false
    };
  }
 
  newsUpdate = async () => {
    const miner = { uuid: this.state.miner.uuid };
    const blockchain = { id: this.state.blockchain.id };
    const data = { blockchain, miner };
    const res = await setNews(data);
    
    this.setState({ votation: res.data.open_voting });
    if (this.state.votation) {
      this.setState({ blockToValidate: res.data.block_to_validate });
    }
  };

  setVotation = () => {
    const INTERVAL_API = 2000;

    this.votation = setInterval(() => {
      this.newsUpdate();
    }, INTERVAL_API);
  };

  resetVotation = () => {
    clearInterval(this.votation);
    this.setState({ votation: false });
  };

  getGame = async dataMiner => {
    const res = await fetchGame(dataMiner);
    const { transactions, miner, blockchain, current_puzzle: currentPuzzle } = res.data;
    this.setState({ transactions, miner, blockchain, currentPuzzle, score: miner.score });
  };

  setScore = () => {
    const TIME_INTERVAL = 100;
    const FIXED = 3;
    this.score = setInterval(() => {
      this.setState(prevState => ({
        score: (prevState.score - parseFloat('0.001')).toFixed(FIXED)
      }));
    }, TIME_INTERVAL);
  };

  stopScore = ({ reset }) => {
    clearInterval(this.score);
    if (reset) {
      this.setState({ score: 0 });
    }
  };

  componentDidMount() {
    const { dataMiner } = this.props.location.state;
    this.getGame(dataMiner);
    this.setScore();
    this.setVotation();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.votation !== this.state.votation && this.state.votation) {
      this.stopScore({ reset: false });
    }
  }

  componentWillUnmount() {
    this.stopScore({ reset: true });
    this.resetVotation();
  }

  addBlock = async () => {
    const { score, orderedPositions } = this.state;
    let { blockchain, miner } = this.state;
    
    blockchain = { id: blockchain.id };
    miner = { uuid: miner.uuid, score };
   
    const data = { blockchain, miner, ...orderedPositions };
    const res = await sendBlocks(data);
    const dataMiner = { ...res.data }; 
  
    this.getGame(dataMiner);
  };

  handleDisabledButton = ({ disabled }) => this.setState({ disabled });

  handlePositions = orderedPositions => this.setState({ orderedPositions });

  handleBlocksNumbers = ({ firstBlocksNumbers, allBlocksNumbers }) =>
    this.setState({ firstBlocksNumbers, allBlocksNumbers });

  handleClick = async () => {
   // this.stopScore({ reset: false });
    this.setState({ clearBoard: true, disabled: true, transactions: {} });
    await this.addBlock();
    
    this.setState({ clearBoard: false })

  };

  render() {
    const {
      miner,
      transactions,
      disabled,
      score,
      currentPuzzle,
      votation,
      firstBlocksNumbers,
      blockToValidate,
      blockchain,
      clearBoard
    } = this.state;

    return (
      <>
        {votation && <PopUpVotation blockToValidate={{ ...blockToValidate, score, miner, blockchain }} />}

        <div className={styles.mainContainer}>
          <Header name={miner.name} score={score} />
          <Blocks transactions={transactions} />
          <div className={styles.boards}>
            <BoardGame
              transactions={transactions}
              onDisabledButton={this.handleDisabledButton}
              onPositions={this.handlePositions}
              onBlocksNumbers={this.handleBlocksNumbers}
              clearBoard={clearBoard}
	    />
            <Resolution
              disabled={disabled}
              onClick={this.handleClick}
              puzzle={currentPuzzle}
              firstBlocksNumbers={firstBlocksNumbers}
	    />
          </div>
        </div>
       </>
    );
  }
}

Principal.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};

export default Principal;

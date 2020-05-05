import React from 'react';

import { fetchGame, setNews } from '../../services/gameService';
import { sendBlocks } from '../../services/blockService';

import Header from './components/Header';
import Blocks from './components/Blocks';
import BoardGame from './components/BoardGame';
import Resolution from './components/Resolution';
import ImgBackground from './components/ImgBackground';
import styles from './index.module.scss';

class Principal extends React.Component {
  state = {
    transactions: {},
    miner: {},
    blockchain: {},
    currentPuzzle: {},
    allBlocksNumbers: {},
    firstBlocksNumbers: {},
    orderedPositions: {},
    score: 0,
    disabled: true,
    votation: false,
    redirection: false
  };

  newsUpdate = async () => {
    const miner = { uuid: this.state.miner.uuid };
    const blockchain = { id: this.state.blockchain.id };
    const data = { blockchain, miner };
    const res = await setNews(data);
    this.setState({ votation: res.data.open_voting });
    console.log(res.data);
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
    const { transactions, miner, blockchain, current_puzzle } = res.data;
    this.setState({ transactions, miner, blockchain, currentPuzzle: current_puzzle });
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
    console.log(res.status, data);
  };

  handleDisabledButton = ({ disabled }) => this.setState({ disabled });

  handlePositions = orderedPositions => this.setState({ orderedPositions });

  handleBlocksNumbers = ({ firstBlocksNumbers, allBlocksNumbers }) =>
    this.setState({ firstBlocksNumbers, allBlocksNumbers });

  handleClick = () => {
    this.stopScore({ reset: false });
    this.addBlock();
    this.setState({redirection: true})
  };

  render() {
    const {
      miner,
      transactions,
      disabled,
      score,
      currentPuzzle,
      firstBlocksNumbers,
      allBlocksNumbers
    } = this.state;

    return (
      <div className={styles.mainContainer}>
        <Header name={miner.name} score={score} />
        <Blocks transactions={transactions} />
        <div className={styles.boards}>
          <BoardGame
            transactions={transactions}
            onDisabledButton={this.handleDisabledButton}
            onPositions={this.handlePositions}
            onBlocksNumbers={this.handleBlocksNumbers}
          />
          <Resolution
            disabled={disabled}
            onClick={this.handleClick}
            puzzle={currentPuzzle}
            blocksNumbers={firstBlocksNumbers}
          />
        </div>
        <ImgBackground />
      </div>
    );
  }
}

export default Principal;

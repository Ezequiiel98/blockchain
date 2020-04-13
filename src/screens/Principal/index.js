import React from 'react';

import { fetchGame } from '../../services/gameService';
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
    disabled: false,
    score: 0,
    positions: {}
  };

  getGame = async () => {
    const res = await fetchGame();
    const { transactions, miner, blockchain } = res.data;
    this.setState({ transactions, miner, blockchain });
    console.log(res.data);
  };

  setScore = () => {
    const TIME_INTERVAL = 100;
    this.score = setInterval(() => {
      this.setState(prevState => ({
        score: (prevState.score - parseFloat('0.001')).toFixed(3)
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
    this.getGame();
    this.setScore();
  }

  componentWillUnmount() {
    this.stopScore({ reset: true });
  }

  addBlock = async () => {
    const { score, positions } = this.state;
    let { blockchain, miner } = this.state;

    blockchain = { id: blockchain.id };
    miner = { uuid: miner.uuid, score };

    const data = { blockchain, miner, ...positions };
    console.log(data);
    const res = await sendBlocks(data);
    console.log(res)
  };

  handleDisabledButton = ({ disabled }) => this.setState({ disabled });

  handlePositions = positions => this.setState({ positions });

  handleClick = () => {
    this.stopScore({ reset: false });
    this.addBlock();
  };

  render() {
    const { miner, transactions, disabled, score } = this.state;
    return (
      <div className={styles.mainContainer}>
        <Header name={miner.name} score={score} />
        <Blocks transactions={transactions} />
        <div className={styles.boards}>
          <BoardGame
            transactions={transactions}
            onDisabledButton={this.handleDisabledButton}
            onPositions={this.handlePositions}
          />
          <Resolution disabled={disabled} onClick={this.handleClick} />
        </div>
        <ImgBackground />
      </div>
    );
  }
}

export default Principal;

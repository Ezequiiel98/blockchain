import React from 'react';

import { fetchGame } from '../../services/gameService';

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
    disabled: true,
    score: 0
  };

  getGame = async () => {
    const res = await fetchGame();
    const { transactions, miner } = res.data;
    this.setState({ transactions, miner });
  };

  setScore = () => {
    const TIME_INTERVAL = 100;
    this.score = setInterval(() => {
      this.setState(prevState => ({
        score: prevState.score - parseFloat('0.001')
      }));
    }, TIME_INTERVAL);
  };

  resetScore = () => {
    clearInterval(this.score);
    this.setState({ score: 0 });
  };

  handleDisabledButton = ({ disabled }) => this.setState({ disabled });

  componentDidMount() {
    this.getGame();
    this.setScore();
  }

  componentWillUnmount() {
    this.resetScore();
  }

  render() {
    const { miner, transactions, disabled, score } = this.state;
    return (
      <div className={styles.mainContainer}>
        <Header name={miner.name} score={score} />
        <Blocks transactions={transactions} />
        <div className={styles.boards}>
          <BoardGame transactions={transactions} onDisabledButton={this.handleDisabledButton} />
          <Resolution disabled={disabled} />
        </div>
        <ImgBackground />
      </div>
    );
  }
}

export default Principal;

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
    disabled: true
  };

  getGame = async () => {
    const res = await fetchGame();
    const { transactions, miner } = res.data;

    this.setState({ transactions, miner });
  };

  componentDidMount() {
    this.getGame();
  }

  handleDisabledButton = ({ disabled }) => this.setState({ disabled });

  render() {
    const { miner, transactions, disabled } = this.state;
    return (
      <div className={styles.mainContainer}>
        <Header name={miner.name} />
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

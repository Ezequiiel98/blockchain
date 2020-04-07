import React from 'react';

import { fetchGame } from '../../services/gameService';

import styles from './index.module.scss';
import Header from './components/Header';
import Blocks from './components/Blocks';
import BoardGame from './components/BoardGame';
import Resolution from './components/Resolution';
import ImgBackground from './components/ImgBackground';

class Principal extends React.Component {
  state = {
    transactions: {},
    miner: {},
    disable: true
  };

  getGame = async () => {
    const res = await fetchGame();
    console.log(res.data);
    const { transactions, miner } = res.data;
    this.setState({ transactions, miner });
  };

  componentDidMount() {
    this.getGame();
  }

  handleDisabledButton = ({ disable }) => this.setState({ disable });

  render() {
    return (
      <div className={styles.mainContainer}>
        <Header />
        <Blocks transactions={this.state.transactions} />
        <div className={styles.boards}>
          <BoardGame transactions={this.state.transactions} onDisabledButton={this.handleDisabledButton} />
          <Resolution disable={this.state.disable} />
        </div>
        <ImgBackground />
      </div>
    );
  }
}

export default Principal;

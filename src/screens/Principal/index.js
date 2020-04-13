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

  /* newsUpdate = () => {
    const miner = {
      uuid: this.state.miner.uuid
    };
    const blockchain = {
     id: this.state.blockchain.id
    };
    const data = { blockchain, miner };
    console.log(data);
  }; */

  setVotation = () => {
    const INTERVAL_API = 2000;
    this.votation = setInterval(() => {
      const miner = {
        uuid: this.state.miner.uuid
      };
      const blockchain = {
        id: this.state.blockchain.id
      };
      const data = { blockchain, miner };
      console.log(data);
    }, INTERVAL_API);
  };

  resetVotation = () => {
    clearInterval(this.votation);
    this.setState({});
  };

  getGame = async () => {
    const res = await fetchGame();
    const { transactions, miner, blockchain } = res.data;
    this.setState({ transactions, miner, blockchain });
  };

  componentDidMount() {
    this.getGame();
    this.setVotation();
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

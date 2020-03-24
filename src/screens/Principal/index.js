import React from 'react';

import { fetchGame } from '../../services/gameService';

import styles from './index.module.scss';
import Header from './components/Header';
import Blocks from './components/Blocks';
import BoardGame from './components/BoardGame';
import Resolution from './components/Resolution';
import response from '../../response';

class Principal extends React.Component {
  state = {
    /*     blockDrag: '',
     */
    transactions: {},
    miner: {}
  };

  /*   handleBlockDrag = blockDrag => this.setState({ blockDrag });
   */
  /* getGame = async () => {
    const res = await fetchGame();
    console.log(res.data);
  }; */

  componentDidMount() {
    /*     this.getGame();
     */

    const { transactions, miner } = response;
    this.setState({ transactions, miner });
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <Header />
        <Blocks onBlockDrag={this.handleBlockDrag} />
        <div className={styles.boards}>
          <BoardGame blockDrag={this.state.blockDrag} blockClass={this.state.blockClass} />
          <Resolution />
        </div>
      </div>
    );
  }
}

export default Principal;

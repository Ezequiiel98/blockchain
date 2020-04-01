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
    /*     blockDrag: '',
     */
    /*   transactions: '',
    miner: {} */
    disable: true
  };

  /*   handleBlockDrag = blockDrag => this.setState({ blockDrag });
   */
  getGame = async () => {
    const res = await fetchGame();
    console.log(res.data);
  };

  componentDidMount() {
    this.getGame();

    /* const { transactions, miner } = response;
    this.setState({ transactions, miner }); */
  }

  handleDisabledButton = ({disable}) => this.setState({ disable });

  render() {
console.log(process.env.REACT_APP_API_URL)
	  return (
      <div className={styles.mainContainer}>
        <Header />
        <Blocks transactions={this.state.transactions} />
        <div className={styles.boards}>
          <BoardGame onDisabledButton={this.handleDisabledButton} />
          <Resolution disable={this.state.disable} />
        </div>
        <ImgBackground />
      </div>
    );
  }
}

export default Principal;

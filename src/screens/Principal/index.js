import React from 'react';

import styles from './index.module.scss';
import Header from './components/Header';
import Blocks from './components/Blocks';
import BoardGame from './components/BoardGame';
import Resolution from './components/Resolution';

class Principal extends React.Component {
  state = {
    blockDrag: ''
  };

  handleBlockDrag = blockDrag => this.setState({ blockDrag });

  render() {
    return (
      <div className={styles.mainContainer}>
        <Header />
        <Blocks onBlockDrag={this.handleBlockDrag}  />
        <div className={styles.boards}>
          <BoardGame blockDrag={this.state.blockDrag} blockClass={this.state.blockClass} />
          <Resolution />
        </div>
      </div>
    );
  }
}

export default Principal;

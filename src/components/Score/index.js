import React from 'react';

import styles from './index.module.scss';

class Score extends React.Component {
  state = { score: 1 };

  setScore = () => {
    this.score = setInterval(() => {
      this.setState(prevState => ({
        score: (prevState.score - parseFloat('0.001')).toFixed(3)
      }));
    }, 100);
  };

  resetScore = () => {
    clearInterval(this.score);
    this.setState({ score: 0 });
  };

  componentDidMount() {
    this.setScore();
  }

  componentWillUnmount() {
    this.resetScore();
  }

  render() {
    const { score } = this.state;
    return (
      <div className={styles.containerScore}>
        <span className={styles.textScore}>Tu Puntaje</span>
        <div className={score >= 0 ? styles.iconContainerPositive : styles.iconContainerNegative}>
          <span className={styles.iconScore}>{score >= 0 ? '+' : '-'}</span>
        </div>
        <span className={styles.score}>{Math.abs(score)}</span>
      </div>
    );
  }
}

export default Score;

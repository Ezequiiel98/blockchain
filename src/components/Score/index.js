import React from 'react';

import iconScorePositive from './assets/img/iconScorePositive.png';
import iconScoreNegative from './assets/img/iconScoreNegative.png';
import styles from './index.module.scss';

class Score extends React.Component {
  state = {
    score: 1
  };

  setScore = () => {
    const timeInterval = 100;

    this.score = setInterval(() => {
      this.setState(prevState => ({
        score: prevState.score - parseFloat('0.001')
      }));
    }, timeInterval);
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
    const myScore = Math.abs(score.toFixed(2));
    return (
      <div className={styles.containerScore}>
        <span className={styles.textScore}>Tu Puntaje</span>
        <div className={styles.iconContainer}>
          <img
            src={score >= 0 ? iconScorePositive : iconScoreNegative}
            alt="icono que indica puntaje positivo o negativo"
          />
        </div>
        <span className={styles.score}>{myScore}</span>
      </div>
    );
  }
}

export default Score;

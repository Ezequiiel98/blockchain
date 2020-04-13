import React from 'react';

import iconScorePositive from './assets/img/iconScorePositive.png';
import iconScoreNegative from './assets/img/iconScoreNegative.png';
import styles from './index.module.scss';

function Score({ score }) {
  const myScore = Math.abs(score).toFixed(2);
  return (
    <div className={styles.containerScore}>
      <span className={styles.textScore}>Tu Puntaje</span>
      <div className={styles.iconContainer}>
        <img
          src={score >= 0 ? iconScorePositive : iconScoreNegative}
          alt={`icono que indica puntaje ${score >= 0 ? 'positivo' : 'negativo'}`}
        />
      </div>
      <span className={styles.score}>{myScore}</span>
    </div>
  );
}

export default Score;

import React from 'react';

import Verde from '../../../assets/img/Verde.png';
import Rojo from '../../../assets/img/Rojo.png';

import styles from './index.module.scss';

function BoardResolution() {
  return (
    <div className={styles.container}>
      <div className={styles.containerBoard}>
        <h2 className={styles.legend}>Resolución</h2>
        <div className={styles.board}>
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cell} />
        </div>
      </div>
      <div className={styles.ContainerButton}>
        <div className={styles.containerRojo}>
          <div className={styles.containerBordo}>
            <img className={styles.iconRectangle} src={Rojo} />
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.containerGreen}>
            <div className={styles.containerStrongGreen}>
              <img className={styles.iconRectangle} src={Verde} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default BoardResolution;

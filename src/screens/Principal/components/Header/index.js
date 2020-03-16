import React from 'react';

import imgBackground from '../../assets/img/Group.png';

import styles from './index.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <img src={imgBackground} alt="imagen de fondo" className={styles.imgBackground} />
      <div className={styles.container}>
        <h2>Nombre Apellido</h2>
        <div className={styles.containerScore}>
          <span className={styles.textScore}>Tu Puntaje</span>
          <span className={styles.iconContainer}>
            <span className={styles.iconScore}>+</span>
          </span>
          <span className={styles.score}>2152</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';

import Score from '../../../../components/Score';
import ImgBackground from '../ImgBackground';

import styles from './index.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <ImgBackground />
      <div className={styles.container}>
        <h2>Nombre Apellido</h2>
        <Score />
      </div>
    </header>
  );
}

export default Header;

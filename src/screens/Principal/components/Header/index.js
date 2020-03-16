import React from 'react';

import imgBackground from '../../assets/img/Group.png';
import Score from '../../../../components/Score';

import styles from './index.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <img src={imgBackground} alt="imagen de fondo" className={styles.imgBackground} />
      <div className={styles.container}>
        <h2>Nombre Apellido</h2>
        <Score />
      </div>
    </header>
  );
}

export default Header;

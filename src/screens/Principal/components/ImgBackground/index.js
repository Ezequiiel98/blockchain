import React from 'react';

import imgBackground from '../../assets/img/background.png';

import styles from './index.module.scss';

function ImgBackground() {
  return <img src={imgBackground} alt="imagen de fondo" styles={styles.imgBackground} />;
}

export default ImgBackground;

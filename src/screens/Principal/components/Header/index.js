import React from 'react';
import PropTypes from 'prop-types';

import Score from '../../../../components/Score';
import ImgBackground from '../ImgBackground';

import styles from './index.module.scss';

function Header({ name }) {
  return (
    <header className={styles.header}>
      <ImgBackground />
      <div className={styles.container}>
        <h2>Juan Carlos</h2>
        <Score />
      </div>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string
};

export default Header;

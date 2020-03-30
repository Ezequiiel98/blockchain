import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function VioletButton({ text, typeButton }) {
  return (
    <div className={styles.containerButton}>
      {typeButton === 'button' ? (
        <button type="button" className={styles.button}>
          {text}
        </button>
      ) : (
        <button type="submit" className={styles.button}>
          {text}
        </button>
      )}
    </div>
  );
}

VioletButton.propTypes = {
  text: PropTypes.string,
  typeButton: PropTypes.string
};

VioletButton.defaultProps = {
  text: 'Text Button',
  typeButton: 'button'
};

export default VioletButton;

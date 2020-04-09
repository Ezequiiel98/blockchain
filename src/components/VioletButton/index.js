import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function VioletButton({ text, typeButton, disabled }) {
  return (
    <div className={disabled ? styles.containerButtonDisabled : styles.containerButtonActive}>
      {typeButton === 'button' ? (
        <button
          type="button"
          className={disabled ? styles.buttonDisabled : styles.buttonActive}
          disable={disabled.toString()}
        >
          {text}
        </button>
      ) : (
        <button
          type="submit"
          className={disabled ? styles.buttonDisabled : styles.buttonActive}
          disable={disabled.toString()}
        >
          {text}
        </button>
      )}
    </div>
  );
}

VioletButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  typeButton: PropTypes.string
};

VioletButton.defaultProps = {
  disabled: false,
  text: 'Text Button',
  typeButton: 'button'
};

export default VioletButton;

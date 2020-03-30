import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function VioletButton({ text, typeButton, disableState }) {
  return (
    <div className={disableState ? styles.containerBtnDisabled : styles.containerBtnActive}>
      {typeButton === 'button' ? (
        <button
          type="button"
          className={disableState ? styles.btnDisabled : styles.btnActive}
          disable={disableState.toString()}
        >
          {text}
        </button>
      ) : (
        <button
          type="submit"
          className={disableState ? styles.btnDisabled : styles.btnActive}
          disable={disableState.toString()}
        >
          {text}
        </button>
      )}
    </div>
  );
}

VioletButton.propTypes = {
  disableState: PropTypes.bool,
  text: PropTypes.string,
  typeButton: PropTypes.string
};

VioletButton.defaultProps = {
  disableState: false,
  text: 'Text Button',
  typeButton: 'button'
};

export default VioletButton;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function VioletButton({ text, typeButton, disable }) {
  return (
    <div className={disable ? styles.containerBtnDisabled : styles.containerBtnActive}>
      {typeButton === 'button' ? (
        <button
          type="button"
          className={disable ? styles.btnDisabled : styles.btnActive}
          disable={disable.toString()}
        >
          {text}
        </button>
      ) : (
        <button
          type="submit"
          className={disable ? styles.btnDisabled : styles.btnActive}
          disable={disable.toString()}
        >
          {text}
        </button>
      )}
    </div>
  );
}

VioletButton.propTypes = {
  disable: PropTypes.bool,
  text: PropTypes.string,
  typeButton: PropTypes.string
};

VioletButton.defaultProps = {
  disable: false,
  text: 'Text Button',
  typeButton: 'button'
};

export default VioletButton;
import React from 'react';
import PropTypes from 'prop-types';

import BoardResolution from '../../../../components/BoardResolution';
import VioletButton from '../../../../components/VioletButton';

import styles from './index.module.scss';

function Resolution({ disabled, onClick }) {
  return (
    <div className={styles.containerResolution}>
      <BoardResolution />
      <VioletButton text="MINAR" typeButton="button" disabled={disabled} onClick={onClick} />
    </div>
  );
}

Resolution.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Resolution;

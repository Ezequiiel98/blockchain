import React from 'react';
import PropTypes from 'prop-types';

import BoardResolution from '../../../../components/BoardResolution';
import VioletButton from '../../../../components/VioletButton';

import styles from './index.module.scss';

function Resolution({ disabled }) {
  return (
    <div className={styles.containerResolution}>
      <BoardResolution />
      <VioletButton text="MINAR" typeButton="button" disabled={disabled} />
    </div>
  );
}

Resolution.propTypes = {
  disabled: PropTypes.bool.isRequired
};

export default Resolution;

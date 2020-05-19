import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';
import MainText from './components/MainText';
import SecondaryText from './components/SecondaryText';
import CheckButton from './components/CheckButton';
import Blocks from './components/Blocks';

function PopUpVotacion({ blockToValidate }) {
  return (
    <div className={styles.container}>
      <div className={styles.whiteBox}>
        <MainText />
        <Blocks />
        <SecondaryText />
        <CheckButton text="REVISAR" blockToValidate={blockToValidate} />
      </div>
    </div>
  );
}

PopUpVotacion.propTypes = {
  blockToValidate: PropTypes.instanceOf(Object).isRequired

}
export default PopUpVotacion;

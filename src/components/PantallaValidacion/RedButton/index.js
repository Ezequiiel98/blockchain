import React from 'react';

import Styles from './index.module.scss';

function RedButton({ image }) {
  return (
    <div className={Styles.containerButton}>
      <button type="button" className={Styles.button}>
      { image }
      </button>
    </div>
  );
}

export default RedButton;

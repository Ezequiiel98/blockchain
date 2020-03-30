import React from 'react';

import Styles from './index.module.scss';

function VioletButton({ text }) {
  return (
    <div className={Styles.containerButton}>
      <button type="button" className={Styles.button}>
        {text} 
      </button>
    </div>
  );
}

export default VioletButton;

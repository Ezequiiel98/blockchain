import React from 'react';

import styles from './index.module.scss';

function VioletButton({ text }) {
  return (
    <div className={styles.containerButton}>
      <button type="button" className={styles.button}>
        {text}
      </button>
    </div>
  );
}

export default VioletButton;

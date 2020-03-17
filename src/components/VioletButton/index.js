import React from 'react';

import styles from './index.module.scss';

function VioletB({ text }) {
  return (
    <div className={styles.containerButton}>
      <button type="button" className={styles.button}>
        {text}
      </button>
    </div>
  );
}

export default VioletB;

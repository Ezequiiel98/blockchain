import React from 'react';

import styles from './index.module.scss';

function Button() {
  return (
    <div className={styles.containerButton}>
      <button type="button" className={styles.button}>
        MINAR
      </button>
    </div>
  );
}

export default Button;

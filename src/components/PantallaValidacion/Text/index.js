import React from 'react';

import styles from './index.module.scss';

function Text() {
  return (
    <div className={styles.container}>
      <span className={styles.texto}>Propuesta</span>
      <span className={styles.texto}>Juan Carlos Perez</span>
    </div>
  );
}

export default Text;

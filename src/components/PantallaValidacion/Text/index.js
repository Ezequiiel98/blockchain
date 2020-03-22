import React from 'react';

import styles from './index.module.scss';

function Text () {
  return (
  <div>
    <div className={styles.padreTexto}>
      <span className={styles.revision}>Review</span>
    </div>
    <div>
      <div>
        <span className={styles.texto}>Propuesta</span>
      </div>
      <div>
        <span className={styles.texto}>Juan Carlos Perez</span>
      </div>
    </div>
  </div>
  );
}

export default Text;
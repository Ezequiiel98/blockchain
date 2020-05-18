import React from 'react';

import styles from './index.module.scss';

function Text({name}) {
  return (
    <div className={styles.container}>
      <span className={styles.revision}>Review</span>
{/*       <span className={styles.texto}>Propuesta</span>
 */}      <span className={styles.texto}>{name}</span>
    </div>
  );
}

export default Text;

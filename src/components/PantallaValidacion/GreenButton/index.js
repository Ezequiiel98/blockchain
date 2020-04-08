import React from 'react';

import styles from './index.module.scss';

function GreenButton() {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button} />
    </div>
  );
}

export default GreenButton;

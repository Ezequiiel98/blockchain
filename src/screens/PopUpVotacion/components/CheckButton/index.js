import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

function CheckButton({ text, blockToValidate }) {
  return (
    <div className={styles.containerButton}>
      <Link
        className={styles.button}
        to={{
          pathname: '/validation',
          state: {
            blockToValidate
          }
        }}
      >
        {text}
      </Link>
    </div>
  );
}

export default CheckButton;

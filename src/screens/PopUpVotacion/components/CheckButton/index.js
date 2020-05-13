import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

function CheckButton({ text, blockToValidate }) {
  return (
    <div className={styles.containerButton}>
      <Link
        to={{
          pathname: '/validation',
          state: {
            blockToValidate
          }
        }}
        className={styles.button}
      >
        {text}
      </Link>
    </div>
  );
}

export default CheckButton;

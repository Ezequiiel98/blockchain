import React from 'react';

import Styles from './index.module.scss';

function GreenButton() {
  return (
    <div className={Styles.containerButton}>
      <button type="button" className={Styles.button} />
    </div>
  );
}

export default GreenButton;

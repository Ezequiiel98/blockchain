import React, { Fragment } from 'react';

import styles from './index.module.scss';

function Buttons() {
  return (
    <Fragment>
      <div className={styles.containerRed}>
        <button type="button" className={styles.buttonRed} />
      </div>
      <div className={styles.containerGreen}>
        <button type="button" className={styles.buttonGreen} />
      </div>
    </Fragment>
  );
}

export default Buttons;

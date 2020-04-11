import React, { Fragment } from 'react';

import styles from './index.module.scss';

function Buttons() {
  return (
    <Fragment>
      <div className={styles.containerRed}>
        <Fragment>
          <button type="button" className={styles.buttonRed} />
        </Fragment>
      </div>
      <div className={styles.containerGreen}>
        <Fragment>
          <button type="button" className={styles.buttonGreen} />
        </Fragment>
      </div>
    </Fragment>
  );
}

export default Buttons;

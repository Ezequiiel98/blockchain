import React, { Fragment } from 'react';

import styles from './index.module.scss';

function Buttons({onClick}) {
  return (
    <Fragment>
      <div className={styles.containerRed}>
        <button onClick={() => onClick('RECHAZAR')} type="button" className={styles.buttonRed} />
      </div>
      <div className={styles.containerGreen}>
        <button onClick={() => onClick('ACEPTAR')} type="button" className={styles.buttonGreen} />
      </div>
    </Fragment>
  );
}

export default Buttons;

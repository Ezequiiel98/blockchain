import React from 'react';

import VioletButton from '../../../../components/VioletButton';
import WhiteButton from '../WhiteButton';

import styles from './index.module.scss';

function FormLogin() {
  return (
    <form className={styles.formLogin}>
      <p className={styles.blockchain}>Blockchain</p>
      <div className={styles.input}>
        <label className={styles.label}>NOMBRE</label>
        <input name="username" id="username" type="text" />
      </div>
      <div className={styles.input}>
        <label className={styles.label}>CÓDIGO DE INGRESO</label>
        <input name="usercode" id="usercode" type="text" />
      </div>
      <div className={styles.violetbutton}>
        <VioletButton text="ENTRAR" />
      </div>
      <div>
        <WhiteButton text="ESPECTAR" />
      </div>
    </form>
  );
}

export default FormLogin;

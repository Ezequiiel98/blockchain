import React from 'react';

import VioletButton from '../../../../components/VioletButton';
import WhiteButton from '../WhiteButton';

import styles from './index.module.scss';

function FormLogin() {
  return (
    <form className={styles.formLogin}>
      <p className={styles.blockchain}>Blockchain</p>
      <div className={styles.containerInput}>
        <label className={styles.label}>NOMBRE</label>
        <input placeholder="Juan Perez" className={styles.input} name="username" id="username" type="text" />
      </div>
      <div className={styles.containerInput}>
        <label className={styles.label}>CÓDIGO DE INGRESO</label>
        <input placeholder="000 000" className={styles.input} name="usercode" id="usercode" type="text" />
      </div>
      <div className={styles.containerbutton}>
        <VioletButton text="ENTRAR" />
        <WhiteButton text="ESPECTAR" />
      </div>
    </form>
  );
}

export default FormLogin;

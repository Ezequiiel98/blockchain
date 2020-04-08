import React from 'react';

import VioletButton from '../../../../components/VioletButton';
import WhiteButton from '../WhiteButton';
import img from '../../assets/img/erroricon.png';
import { sendGame } from '../../../../Services/gameService';

import styles from './index.module.scss';
/* This is a login screen form*/

class FormLogin extends React.Component {
  state = {
    errorCode: false,
    errorName: false,
    errorServer: false,
    code: '',
    name: ''
  };

  handleSendGame = async data => {
    const res = await sendGame(data);
    if (res.status === 500) {
      this.setState({ errorCode: true });
    } else if (res.status === 404) {
      this.setState({ errorServer: true });
    } else {
      console.log('redireccionamiento');
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, code } = this.state;
    if (name === '') {
      this.setState({ errorName: true });
    }
    if (code === '') {
      this.setState({ errorCode: true });
    }
    if (name && code) {
      const data = { name, code };
      this.handleSendGame(data);
    }
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} className={styles.formLogin}>
        <p className={styles.title}>Blockchain</p>
        <div className={styles.containerInput}>
          {this.state.errorName && <img src={img} className={styles.errorIcon} />}
          <label className={styles.label}>NOMBRE</label>
          <input
            onChange={e => this.handleChange(e)}
            placeholder="Juan Perez"
            className={this.state.errorName ? styles.error : styles.input}
            name="name"
            id="name"
            type="text"
          />
          {this.state.errorName && <p className={styles.msgName}>El nombre es obligatorio</p>}
        </div>
        <div className={styles.containerInput}>
          {this.state.errorCode && <img src={img} className={styles.errorIcon} />}
          <label className={styles.label}>CÓDIGO DE INGRESO</label>
          <input
            onChange={e => this.handleChange(e)}
            placeholder="000 000"
            className={this.state.errorCode ? styles.error : styles.input}
            name="code"
            id="code"
            type="text"
          />
          {this.state.errorCode && <p className={styles.msgCode}>Código incorrecto. Verifica nuevamente</p>}
          {this.state.errorServer && (
            <p className={styles.msgServer}>No se puede comunicar con el servidor</p>
          )}
        </div>
        <div className={styles.containerbutton}>
          <VioletButton text="ENTRAR" typeButton="submit" />
          <WhiteButton text="ESPECTAR" />
        </div>
      </form>
    );
  }
}
export default FormLogin;

import React from 'react';
import { Redirect } from 'react-router-dom';

import VioletButton from '../../../../components/VioletButton';
import WhiteButton from '../WhiteButton';
import img from '../../assets/img/erroricon.png';
import { sendGame } from '../../../../services/gameService';
import { Consumer as ConsumerLogin } from '../../../../contexts/ContextLogin/ContextLogin';

import styles from './index.module.scss';
/* This is a login screen form*/

class FormLogin extends React.Component {
  state = {
    name: '',
    code: '',
    errorCode: false,
    errorName: false,
    errorServer: false,
    successLogin: false,
    dataMiner: {}
  };

  handleSendGame = async (data, setData) => {
    const res = await sendGame(data);
    if (res.status === 500) {
      this.setState({ errorCode: true });
    } else if (res.status === 404) {
      this.setState({ errorServer: true });
    } else {
      setData({ successLogin: true });
      this.setState({ successLogin: true, dataMiner: res.data });
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event, setData) => {
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
      this.handleSendGame(data, setData);
    }
  };

  render() {
    return (
      <ConsumerLogin>
        {({ setData }) => (
          <form onSubmit={event => this.handleSubmit(event, setData)} className={styles.formLogin}>
            {this.state.successLogin && (
              <Redirect
                to={{
                  pathname: '/game',
                  state: { dataMiner: this.state.dataMiner }
                }}
              />
            )}
            <p className={styles.title}>Blockchain</p>
            <div className={styles.containerInput}>
              {this.state.errorName && <img src={img} className={styles.errorIcon} />}
              <label className={styles.label}>NOMBRE</label>
              <input
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                placeholder="000 000"
                className={this.state.errorCode ? styles.error : styles.input}
                name="code"
                id="code"
                type="text"
              />
              {this.state.errorCode && (
                <p className={styles.msgCode}>Código incorrecto. Verifica nuevamente</p>
              )}
              {this.state.errorServer && (
                <p className={styles.msgServer}>No se puede comunicar con el servidor</p>
              )}
            </div>
            <div className={styles.containerbutton}>
              <VioletButton text="ENTRAR" typeButton="submit" />
              <WhiteButton text="ESPECTAR" />
            </div>
          </form>
        )}
      </ConsumerLogin>
    );
  }
}
export default FormLogin;

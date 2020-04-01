import React from 'react';

import VioletButton from '../../../../components/VioletButton';
import WhiteButton from '../WhiteButton';
import img from '../../assets/img/erroricon.png';
import { sendGame } from '../../../../Services/gameService';

import styles from './index.module.scss';

class FormLogin extends React.Component {
  state = {
    /* ves tenes 1 solo error sisi como global necesito errores especificos
    necesitas 3  dale rey
    bueno ahora tenes 3 tenes que usarlos algo asi  te hago 1 y despues te manejas jaja
    */
    errorCode: false,
    errorName: false,
    errorServer: false,
    code: '',
    name: ''
  };

  handleChange = event => {
    const { value, name } = event.target;
    if (value !== '') {
      this.setState({ [name]: value });
    }
  };

  /* ahi vaque mas falta? :CCC no falta un const res= okis SI SISII
  que hace señora jajajaj sisis pero en el ELSE mmira 
  vos tenes esto sendGame eeso se conecta con la api  y te hace el post solo porque ya lo configuraste 
*/
  handleSubmit = async event => {
    event.preventDefault();
    const { name, code } = this.state;
    if (name === '' && code == '') {
      this.setState({ errorName: true, errorCode: true });
    } else if (name === '') {
      this.setState({ errorName: true });
    } else if (code === '') {
      this.setState({ errorCode: true });
    } else {

      const data = { name, code };
      /* data es los datos de los inputs, hasta ahi vamos ?  SIII PSICOPATAjajajJAJAJA NO dije nada
      jiiji mmm
       bueno si cambio de archivo me seguis no ? no me seguis jaja anda a services / gameServices    y no apareces alla tarad jajaj */ 
       /* export const sendGame = data => api.post('/join_game', data)
  bueno ves esto lo vamos a usar  aca  asincronicamente (?) 
  aver :OOOOOOOOOOOOOOOOOOO
   bueno ahi haces una variable con la respuesta que te da la api 
    le pones el await para que lo espere y no sea ansioso como yo(?)
  */

      const res = await sendGame(data);
      console.log(res.data, res.status);
      /* fijate que dice la consola de chrome y? */

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

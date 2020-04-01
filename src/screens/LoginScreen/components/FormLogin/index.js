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
    let { value, name } = event.target;
    if(value !== ''){
      this.setState({ [name]: value});
    }
  };

  handleSubmit = event => {

    let { name, code } = this.state;
/* 
    if(name !== '' && code !== ''){
      
      let data = { name, code };okokoko

    } else{
      this.setState({error: true})
    } */

    /* esto es masomenos asi SI EL NOMBRE ESTA Vacio entonces error nombre, 
    si el nombre no esta vacio pero el ocdigo si entonces tiras error de codigo y
     si los dos  son false quiere decir que tienen algo adentro entonces creas la data 
    se tildo, no? jajaj
    sisi medio lag anda okok
    igual te va a llenar de errores el navegador porque mas avbajo usas this.state.erro y eso ya no existe
    */

   if(name === '' && code == ''){
    this.setState({ errorName: true, errorCode: true });
    }
    
    else if(name === ''){
      this.setState({ errorName: true })
    } else if(code === '') {
      this.setState({ errorCode: true })
    } else {
      let data = { name, code };
    }
  }

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

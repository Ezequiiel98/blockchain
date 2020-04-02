import React from 'react';

import VioletButton from '../../../../components/VioletButton';
import WhiteButton from '../WhiteButton';
import img from '../../assets/img/erroricon.png';
import { sendGame } from '../../../../Services/gameService';

import styles from './index.module.scss';

class FormLogin extends React.Component {
  state = {
    errorCode: true,
    errorName: false,
    errorServer: false,
    code: '',
    name: ''
  };

  /* buenas

 que hicisteeeeeee?  SII se me tildo wp
 estas aca? jaja dejalo quieto
 bueno porque lo pusiste en el change?
 no entiendo que hiciste jajaok

eso dejalo asi

*/
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  /* porque se llamaniguales las 2 ? cagadas ke izizte :c */

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
      /* bueno ves esta variable res? AH jajajajaja lpm :( no

        sabia que era una var) es la respuesta de la api :c lpm jajaj y como MAquetearias los errores
        o sea si se como pero como pones el mensaje, lo pones como atributo?
ssSII EZE gracias ya tira los mensajes, falta maquetar jajaja ya esta e no se hay delay pero ya esta xd
hermoso fijate si tira el atr en consola si es que esta todo bien 
buenisimo maqueta y ya 
        haces una <p> error tal cosa </p>
        bueno masomenos es eso lo que tenes que hacer onda ya esta era eso queda medio asqueroso igual
        */
      const data = { name, code };
      const res = await sendGame(data);
      console.log(res.data, res.status);
      if (res.status === 500) {
        this.setState({ errorServer: true });
      } else {
        console.log('atr');

        /* ahora ya anda fijate guardalo primero jaja habia un   } de mas  */
        
      }
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
          />{' '}
          {/* dale lpm AAA dale jajaj   y ygracias a eso solo
            podes hacer un componente error yp asarle props pero da igua
            l  ahora ubica esto bien con flexbox pq queda mal creo  el texto, no? que paaja
            las clases no se ponen asi :c jaja styles.msgName sin comillas jaja
*/}
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
          {this.state.errorServer && <p className={styles.msgServer}>No se puede comunicar con el servidor</p>}

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

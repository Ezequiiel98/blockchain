 import React from 'react';

import LineasGrises from '../../assets/img/lineasGrises.png';

import styles from './index.module.scss';

function PantallaValidacion() {
    return (
      /* aca eslint tambien te esta llenando de errores  */
      /* trata de codear con los nombres en ingles :c  */
    <div className={styles.principal}>

          <img className={styles.imagenSuperior} src={LineasGrises} />

        <div className={styles.secundario}>

          <h2 className={styles.revision}> Review</h2> 

        </div>
    
        <div className={styles.nombre}>
          {/* porque tenes texto en divs ?  tenes  que usar un p o un span */}
            <p> Propuesta </p>
            <p> Juan Carlos Perez</p>
        </div>  
    </div>  
);
  }

export default PantallaValidacion;


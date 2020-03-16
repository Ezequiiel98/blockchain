import React, { Component } from 'react';

import LineasGrises from '../../assets/img/lineasGrises.png';

import styles from './index.module.scss';

function PantallaValidacion() {
    return (
      <div className={styles.principal}>

          <img className={styles.imagenSuperior} src={LineasGrises} />
          <div className={styles.secundario}>
          <h1 className={styles.revision}> Review</h1>
              <div className={styles.nombre}>
                  <div> Propuesta </div>
                  <div> Juan Carlos Perez</div>
              </div>    
          </div>
      </div>
    );
  }

export default PantallaValidacion;


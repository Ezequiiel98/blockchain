import React, { Component } from 'react';

import LineasGrises from '../../assets/img/lineasGrises.png';

import styles from './index.module.scss';

function PantallaValidacion() {
    return (
      <div className="Header">
          <img className={styles.imagenSuperior} src={LineasGrises} />
          <h1 className={styles.nombre} >Mateo Ruiz Guiñazu</h1>
      </div>
    );
  }

export default PantallaValidacion;


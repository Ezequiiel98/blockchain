import React from 'react';

import LineasGrises from '../../../assets/img/LineasGrises.png';

import styles from './index.module.scss';

function ImagenSuperior() {
    return (

        <img className={styles.ImagenSuperior} src={LineasGrises}></img>

    );
}

export default ImagenSuperior;
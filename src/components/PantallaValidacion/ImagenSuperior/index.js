import React from 'react';

// mira bien la ruta de la imagen y como se llama
import LineasGrises from '../../../assets/img/LineasGrises.png';

import styles from './index.module.scss';

function ImagenSuperior() {
    return (
        // fijate que eslint te tira error por tener esto asi, si te marca rojo es porque hay un error
        <img className={styles.ImagenSuperior} src={LineasGrises}></img>

    );
}

export default ImagenSuperior;
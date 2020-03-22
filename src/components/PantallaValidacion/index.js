import React from 'react';

import BoardResolution from './BoardResolution';

import ImagenSuperior from '../PantallaValidacion/ImagenSuperior';

import Score from './Score';

import Text from './Text';
import Rectangulos from './Rectangulos';


function PantallaValidacion() {
  return (
    <div>
      <ImagenSuperior />
  
      <div>  
        <Score />
      </div>
      
      <div>
        <Text />
      </div>

      <div>
        <BoardResolution />
      </div>

      <div>
        <Rectangulos />
      </div>
    </div>
);
}
export default PantallaValidacion;

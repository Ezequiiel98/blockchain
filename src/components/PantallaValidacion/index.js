import React from 'react';

import BoardResolution from './BoardResolution';

import ImagenSuperior from '../PantallaValidacion/ImagenSuperior';

import Score from './Score';

import Text from './Text';
import RedButton from './RedButton';


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
        <RedButton />
      </div>
    </div>
);
}
export default PantallaValidacion;

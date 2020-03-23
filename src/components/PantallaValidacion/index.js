import React from 'react';

import Board from './Board';

import BoardResolution from './BoardResolution';

import ImagenSuperior from './ImagenSuperior';

import Score from './Score';

import Text from './Text';
import RedButton from './RedButton';
import GreenButton from './GreenButton';
import ImagenInferior from './ImagenInferior';


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
        <Board />
      </div>

      <div>
        <BoardResolution />
      </div>

      <div>
        <RedButton />
      </div>

      <div>
        <GreenButton />
      </div>

      <div>
        <ImagenInferior />
      </div>
    </div>
);
}
export default PantallaValidacion;

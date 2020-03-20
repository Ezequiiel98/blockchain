import React from 'react';

import ImagenSuperior from '../PantallaValidacion/ImagenSuperior';

import BoarResolution from './BoardResolution';
import Score from './Score';

function PantallaValidacion() {
  return (
    <div>
      <ImagenSuperior />
  
      <div>
        <BoarResolution />
      </div>
    
      <div>  
        <Score />
      </div>
    </div>
);
}
export default PantallaValidacion;

import React from 'react';

/* import ImagenSuperior from '../PantallaValidacion/ImagenSuperior';
 */import BoardResolution from '../BoardResolution';
import Score from '../Score';
import PantallaValidacion from '../PantallaValidacion';

function App() {
  return (
    <div>
      {/*       <ImagenSuperior />
       */}
       {/* tenes un componente que se llama PantallaValidacion  se supone que ahi van a ir todos los elementos de esa pantalla no te parece? */}
      <PantallaValidacion />
      <BoardResolution />
      <Score />
    </div>
  );
}

export default App;

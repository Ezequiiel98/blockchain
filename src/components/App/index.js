import React from 'react';

import BoardResolution from '../BoardResolution';
import Score from '../Score';

import PantallaValidacion from '../PantallaValidacion';

function App() {
  return (
    <div>
        <div>
          <PantallaValidacion />
        </div>
    
        <div>
          <BoardResolution />
          <Score />
        </div>
    </div>
);
}

export default App;

import React from 'react';

import PopUpVotacion from '../PopUpVotacion';

import Styles from './index.module.scss';

function App() {
  return (
    <div className={Styles.WhiteBox}>
      <div className={Styles.Container}>
        <PopUpVotacion />
      </div>
    </div>
  );
}

export default App;

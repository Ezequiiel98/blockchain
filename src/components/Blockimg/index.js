import React from "react";

import img from "./assets/img/blockimg.svg";

import styles from './styles.scss';

function Blockimg() {
  return (
    <div className="blockimg">
      <img src={img} />
    </div>
  );
}

export default Blockimg;

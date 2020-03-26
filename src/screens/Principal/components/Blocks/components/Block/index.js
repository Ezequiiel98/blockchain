import React from 'react';

import styles from './index.module.scss';

/* onDragStart, onDragEnd, uuid, number, certified, color, amount
 */
function Block({  uuid, number, numberPoints, color, broken, onDragEnd, onDragStart }) {
  const colorDark = `${color}Dark`;

  const points = [];
  for (let i = 1; i <= numberPoints; i++) {
    points.push(`point${i}`);
  }

  return (
    <div
      id={uuid}
      className={`block ${styles.containerBlock} ${styles[colorDark]} `}
      draggable
      onDragEnd={e => onDragEnd(e)}
      onDragStart={(e, node) => onDragStart(e, node)}
    >
      <div className={`${styles[color]}`}>
        <div className={styles.blockPoints}>
          {points.map(point => (
            <span key={point} className={styles[point]} />
          ))}
        </div>
        <h4 className={styles.blockNumber}>{number}</h4>
      </div>
      {broken && <span className={styles.noCertified} />}
    </div>
  );
}

export default Block;

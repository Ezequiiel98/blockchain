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
      className={`${styles.containerBlock} ${styles[colorDark]}`}
      /*  onDragEnd={e => onDragEnd(e)}
      onDragStart={e => onDragStart(e)}
      draggable */
    >
      {broken && <span className={styles.noCertified} />}
      <div className={`${styles[color]}`}>
        <div className={styles.blockPoints}>
          {points.map(point => (
            <span key={point} className={styles[point]} />
          ))}
        </div>
        <h4 className={styles.blockNumber}>{number}</h4>
      </div>
    </div>
  );
}

export default Block;

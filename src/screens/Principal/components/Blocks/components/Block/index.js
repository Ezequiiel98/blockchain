import React from 'react';

import styles from './index.module.scss';

function Block({ onDragStart, onDragEnd, number, numberPoints, color, broken }) {
  const colorDark = `${color}Dark`;
  const points = [];
  for (let i = 1; i <= numberPoints; i++) {
    points.push(`point${i}`);
  }

  return (
    <div
      className={`${styles.containerBlock} ${styles[colorDark]}`}
      onDragEnd={e => onDragEnd(e)}
      onDragStart={e => onDragStart(e)}
      draggable
    >
      <div className={`${styles.block} ${styles[color]}`}>
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

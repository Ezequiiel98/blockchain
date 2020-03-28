import React from 'react';

import styles from './index.module.scss';

/* onDragStart, onDragEnd, uuid, number, certified, color, amount
 */
function Block({ id, number, points, color, broken, onDragEnd, onDragStart, bigBlock }) {
  const colorDark = `${color}Dark`;

  const pointsClass = [];
  for (let i = 1; i <= points; i++) {
    pointsClass.push(`point${i}`);
  }

  return (
    <div
      id={id}
      className={` ${bigBlock ? styles.containerBigBlock : styles.containerSmallBlock} ${
        styles[colorDark]
      } containerBlockDrag`}
      draggable
      onDragEnd={e => onDragEnd(e)}
      onDragStart={e => onDragStart(e)}
    >
      <div className={`${styles[color]} blockDrag`}>
        <div className={styles.blockPoints}>
          {pointsClass.map(point => (
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

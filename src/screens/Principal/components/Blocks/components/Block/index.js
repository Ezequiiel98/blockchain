import React from 'react';

import styles from './index.module.scss';

/* onDragStart, onDragEnd, uuid, number, certified, color, amount
key
id
number
certified
color
fee
 */
function Block({ uuid, number, certified, color, fee, onDragEnd, onDragStart, bigBlock }) {
  const colorDark = `${color}Dark`;
  const MAX_FEE = 1;
  const points = (fee / MAX_FEE) * 7 + 1;
  const pointsClass = [];
  for (let i = 1; i <= points; i++) {
    pointsClass.push(`point${i}`);
  }

  return (
    <div
      id={uuid}
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
      {!certified && <span className={styles.noCertified} />}
    </div>
  );
}

export default Block;

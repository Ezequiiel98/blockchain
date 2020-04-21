import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

function Block({ uuid, number, certified, color, fee, onDragEnd, onDragStart, bigBlock }) {
  const colorDark = `${color}Dark`;
  const MAX_FEE = 1;
  const MAX_POINTS = 7;
  const points = (fee / MAX_FEE) * MAX_POINTS + 1;
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
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      draggable
    >
      <div className={`${styles[color]} blockDrag`}>
        <div className={styles.blockPoints}>
          {pointsClass.map(point => (
            <span key={point} className={styles[point]} />
          ))}
        </div>
        <h4 className={styles.blockNumber}>{number}</h4>
      </div>
      {!certified && <span className={`${styles.noCertified} blockDragNoCertified`} />}
    </div>
  );
}

Block.propTypes = {
  certified: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  fee: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  uuid: PropTypes.string.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
  bigBlock: PropTypes.bool
};

Block.defaultProps = {
  bigBlock: false
};

export default Block;

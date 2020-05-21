import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';
import githubIcon from './assets/img/githubIcon.png';
import linkedinIcon from './assets/img/linkedinIcon.jpg';

function Dev({ name, linkedin, github }) {
  return (
    <div className={styles.containerDev}>
      <span className={styles.nameDev}> {name}</span>
      <div className={styles.containerIcons}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.linkedin.com/in/${linkedin}`}
          className={styles.linkedinIcon}
        >
          <img src={linkedinIcon} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${github}`}
          className={styles.githubIcon}
        >
          <img src={githubIcon} />
        </a>
      </div>
    </div>
  );
}

Dev.propTypes = {
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Dev;


import React from 'react';
import styles from './TopBar.module.css'; 

const TopBar = ({ title }) => {
  return (
    <div className={styles.topBar}>
      <h1>{title}</h1>
    </div>
  );
};

export default TopBar;

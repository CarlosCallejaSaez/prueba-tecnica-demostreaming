import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import claquetaImage from './../../assets/placeholder.png'; 

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      
      <div className={styles.linksContainer}>
        <Link to="/series" className={styles.linkBlock}>
          <p className={styles.linkText}>Popular Series</p>
          <img src={claquetaImage} alt="Claqueta" className={styles.claquetaImage} />
        </Link>
        <Link to="/movies" className={styles.linkBlock}>
          <p className={styles.linkText}>Popular Movies</p>
          <img src={claquetaImage} alt="Claqueta" className={styles.claquetaImage} />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

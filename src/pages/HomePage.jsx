import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'; 
import TopBar from "../components/TopBar/TopBar"

const HomePage = () => {
  return (<>
    <TopBar title="Popular Titles"/>
    <div className={styles.container}>
      
      <div className={styles.cardContainer}>
        <Link to="/series" className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src='./../../assets/placeholder.png' alt="Series" />
          </div>
          <span className={styles.cardTitle}>SERIES</span>
          <p className={styles.cardSubtitle}>Popular Series</p>
        </Link>
       

       
      
        
        <Link to="/movies" className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src='./../../assets/placeholder.png' alt="Movies" />
          </div>
          <span className={styles.cardTitle}>MOVIES</span>
          <p className={styles.cardSubtitle}>Popular Movies</p>
        </Link>
      </div>
    </div>
    </>
  );
};

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import TopBar from "../../components/TopBar/TopBar";
import SectionCard from "../../components/SectionCard/SectionCard";

const HomePage = () => {
  return (
    <>
      <TopBar title="Popular Titles" />
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <SectionCard to="/series" title="SERIES" subtitle="Popular Series" />
          <SectionCard to="/movies" title="MOVIES" subtitle="Popular Movies" />
        </div>
      </div>
    </>
  );
};

export default HomePage;

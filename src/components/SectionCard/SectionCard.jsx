import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SectionCard.module.css';

const SectionCard = ({ to, title, subtitle }) => {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src='/placeholder.png' alt={title} />
      </div>
      <span className={styles.cardTitle}>{title}</span>
      <p className={styles.cardSubtitle}>{subtitle}</p>
    </Link>
  );
};

export default SectionCard;

import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
        DEMO Streaming
      </Link>
            <div className={styles.authLinks}>
                <button className={styles.loginButton}>Log in</button>
                <button className={styles.trialButton}>Start your free trial</button>
            </div>
        </header>
    );
};

export default Header;

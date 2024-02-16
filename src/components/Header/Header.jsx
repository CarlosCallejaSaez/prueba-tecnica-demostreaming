import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>DEMO Streaming</div>
            <div className={styles.authLinks}>
                <button className={styles.loginButton}>Log in</button>
                <button className={styles.trialButton}>Start your free trial</button>
            </div>
        </header>
    );
};

export default Header;

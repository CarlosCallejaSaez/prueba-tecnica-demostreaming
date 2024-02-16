
import React from 'react';
import styles from './Footer.module.css';
import FacebookIcon from '../../../assets/social/facebook-white.svg'
import TwitterIcon from '../../../assets/social/twitter-white.svg';
import InstagramIcon from '../../../assets/social/instagram-white.svg';
import AppStoreIcon from '../../../assets/store/app-store.svg';
import PlayStoreIcon from '../../../assets/store/play-store.svg';
import WindowsStoreIcon from '../../../assets/store/windows-store.svg'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#">Home</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Collection Statement</a>
        <a href="#">Help</a>
        <a href="#">Manage Account</a>
      </div>
      <div className={styles.copyRight}>
        <p>&copy; 2016 DEMO Streaming. All Rights Reserved.</p>
      </div>
      <div className={styles.socialsAndStores}>
      <div className={styles.socialLinks}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={TwitterIcon} alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
      </div>
      <div className={styles.storeLinks}>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={AppStoreIcon} alt="App Store" />
        </a>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src={PlayStoreIcon} alt="Play Store" />
        </a>
        <a href="https://www.microsoft.com/store" target="_blank" rel="noopener noreferrer">
          <img src={WindowsStoreIcon} alt="Windows Store" />
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;

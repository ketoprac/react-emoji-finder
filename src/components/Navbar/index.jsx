import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <span className={styles.navTitle}>Emoji Finder</span>
      {/* <img style={{ marginTop: 3, marginLeft: 4}} className={styles.navIcon} src={searchIcon} alt="Search Icon" /> */}
    </nav>
  )
}

export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <p>Black&White</p>
                    <p>All rights reserved</p>
                    <p>2023</p>
                </div>
                <div className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link to="/new" className={styles.navLink}>
                                New
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/discounts" className={styles.navLink}>
                                Discounts
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/Men" className={styles.navLink}>
                                Men
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/Women" className={styles.navLink}>
                                Women
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/about-us" className={styles.navLink}>
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <a href="tel:0979999958" className={styles.phone}>
                        097 999 99 58
                    </a>
                    <a href="/make-a-call" className={styles.callToAction}>
                        MAKE A CALL
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

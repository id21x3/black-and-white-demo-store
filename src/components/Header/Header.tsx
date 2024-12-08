// src/components/Header/Header.tsx
import React from 'react';
import { FaUserAlt } from 'react-icons/fa'; // Иконка пользователя
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    Black&White
                </a>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <a href="/new" className={styles.navLink}>
                                New
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/discounts" className={styles.navLink}>
                                Discounts
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/for-guys" className={styles.navLink}>
                                For Guys
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/for-girls" className={styles.navLink}>
                                For Girls
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/about-us" className={styles.navLink}>
                                About Us
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.actions}>
                    <div className={styles.userAccount}>
                        <FaUserAlt className={styles.userIcon} />
                        <span className={styles.accountBalance}>$120.50</span>
                        <div className={styles.dropdownMenu}>
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <FaUserAlt className={styles.cardIcon} />
                                    <div className={styles.cardUserInfo}>
                                        <span className={styles.cardUsername}>John Doe</span>
                                        <span className={styles.cardBalance}>$120.50</span>
                                    </div>
                                </div>
                                <div className={styles.cardBody}>
                                    <a href="/profile" className={styles.menuItem}>Profile</a>
                                    <a href="/settings" className={styles.menuItem}>Settings</a>
                                    <a href="/logout" className={styles.menuItem}>Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

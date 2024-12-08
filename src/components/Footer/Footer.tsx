// src/components/Footer/Footer.tsx
import React from 'react';
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
                <div className={styles.contact}>
                    <a href="/097-999-99-58" className={styles.phone}>
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
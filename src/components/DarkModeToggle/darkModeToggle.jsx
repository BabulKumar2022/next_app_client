import React from 'react';
import styles from './darkModeToggle.module.css'
import Image from 'next/image';

const DarkModeToggle = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>D</div>
            <div className={styles.icon}>S</div>
            <div className={styles.ball}/>
        </div>
    );
};

export default DarkModeToggle;
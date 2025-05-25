import React from 'react';
import styles from './Hero.module.css';
import FallingTags from '../FallingTags/FallingTags';

const Hero: React.FC = () => {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.bgLayer}></div>

            <div className={styles.heroContent}>
                <h1 className={styles.title}>Ankit Kumar</h1>
                <p className={styles.subtitle}>Aspiring Full Stack Developer</p>
            </div>
            
            <FallingTags />
        </div>
    );
};

export default Hero;
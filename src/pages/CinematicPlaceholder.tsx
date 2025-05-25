import React from "react";
import { motion } from 'framer-motion';
import styles from './CinematicPlaceholder.module.css';
import luffyRun from '../assets/small luffy run.png';

const CinematicPlaceholder: React.FC = () => {
    return (
        <div className={styles.wall}>
            <div className={styles.crackContainer}>
                <div className={styles.crack}></div>
                <div className={styles.crack}></div>
                <div className={styles.crack}></div>
                <div className={styles.crack}></div>
                <div className={styles.crack}></div>
                <div className={styles.crack}></div>
                <div className={styles.crack}></div>
                <div className={styles.crack}></div>
            </div>

            <motion.h1
            className={styles.title}
            initial={{ opacity: 0, scale: 0.8}}
            animate={{ opacity:1, scale: 1}}
            transition={{ duration: 1}}
            >
                Cinematic Mode
            </motion.h1>

            <motion.p
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1, delay: 0.3 }}
            >
                We're constructing an epic interactive experience for you...behind these walls...
            </motion.p>

            <motion.img
                src={luffyRun}
                alt="Luffy running"
                className={styles.luffy}
                initial={{ x: '-20%' }}
                animate={{ x: '120%'}}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            ></motion.img>
        </div>
    );
};

export default CinematicPlaceholder;
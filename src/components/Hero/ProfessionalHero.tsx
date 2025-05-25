import React from "react";
import styles from './ProfessionalHero.module.css';
import { motion } from "framer-motion";
import profileImg from '../../assets/my_photo.png';

const ProfessionalHero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: -50}}
                    animate={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.6 }}
                >
                    <img src={profileImg} alt="Profile" className={styles.profileImg} />
                </motion.div>

                <motion.div
                    className={styles.textContent}
                    initial={{ opacity: 0, x: 50}}
                    animate={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.6 }}
                >
                    <h1>Hello, I'm <span className={styles.name}>Ankit Kumar</span></h1>
                    <p className={styles.subtitle}>Full-Stack Developer | React • Django • PostgreSQL</p>
                    <div className={styles.buttons}>
                        <a href="/projects" className={styles.btn}>View Projects</a>
                    <a href="/contact" className={styles.btnSecondary}>Contact Me</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProfessionalHero;
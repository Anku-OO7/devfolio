import React from "react";
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Ankit Kumar. All rights reserved.</p>
            <div className={styles.links}>
                <a href="https://github.com/Anku-OO7" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/ankit-kumar-a72590269" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                {/* <a href="/resume.pdf" target="_blank">Resume</a> */}
            </div>
        </footer>
    );
};

export default Footer;
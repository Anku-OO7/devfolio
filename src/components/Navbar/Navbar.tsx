import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hasNavigated, setHasNavigated] = useState(false);
    const [, setIsMobileView] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setHasNavigated(location.pathname !== '/')
    }, [location]);
    
    const isActive = (path: string) => location.pathname === path;
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link className={styles.logo} to="/">DevFolio</Link>
                <button
                    className={styles.menuToggle}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
               
                {hasNavigated && (
                    <div className={styles.desktopLinks}>
                        <Link className={`${styles.navLink} ${isActive('/') ? styles.active : ""}`} to="/">Home</Link>
                        <Link className={`${styles.navLink} ${isActive('/about') ? styles.active : ""}`} to="/about">About</Link>
                        <Link className={`${styles.navLink} ${isActive('/projects') ? styles.active : ""}`} to="/projects">Projects</Link>
                        <Link className={`${styles.navLink} ${isActive('/contact') ? styles.active : ""}`} to="/contact">Contact</Link>
                        <Link to="/Ankit-Kumar-Resume.pdf" target='_blank' className={styles.navLink}>Resume</Link>
                    </div>
                )}
                
                <div className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ''}`}>
                    <Link onClick={() => setMenuOpen(false)} className={styles.navLink} to="/">Home</Link>
                    <Link onClick={() => setMenuOpen(false)} className={styles.navLink} to="/about">About</Link>
                    <Link onClick={() => setMenuOpen(false)} className={styles.navLink} to="/projects">Projects</Link>
                    <Link onClick={() => setMenuOpen(false)} className={styles.navLink} to="/contact">Contact</Link>
                    <Link onClick={() => setMenuOpen(false)} to="/Ankit-Kumar-Resume.pdf" target='_blank' className={styles.navLink}>Resume</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
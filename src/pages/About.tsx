import React from 'react';
import styles from './About.module.css';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import profileImg from '../assets/my_photo.png';
import { SiLeetcode } from 'react-icons/si';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const About: React.FC = () => {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.container}>
                <div className={styles.imageBox}>
                    <img src={profileImg} alt='Profie' className={styles.profileImg} />
                </div>

                <div className={styles.contentBox}>
                    <h2 className={styles.heading}>About Me</h2>
                    <p className={styles.description}>
                        I'm a professional full-stack developer, currently focused on crafting visually engaging and technically sound frontend and backend solutions.
                        <br /><br />
                        I love solving real-world problems through code, exploring new technologies,and building interactive user experiences.
                    </p>
                    <ul className={styles.highlights}>
                        <li> Strong foundation in React, TypeScript, and Vite</li>
                        <li> Hands-on with backend (Firebase, Django, PostgreSql)</li>
                        <li> Detail-oriented and UI/UX focused</li>
                        <li> Always learning, always building</li>
                    </ul>

                    <div className={styles.socialIcons}>
                        <a href="https://github.com/Anku-OO7" target='_blank' rel='noreferrer'><FaGithub /></a>
                        <a href="https://linkedin.com/in/ankit-kumar-a72590269" target='_blank' rel='noreferrer'><FaLinkedin /></a>
                        <a href="https://leetcode.com/u/anku-oo7/" target='_blank' rel='noreferrer'><SiLeetcode /></a>
                        <a href="mailto: ankitkumar786687@gmail.com" rel='noopener noreferrer'><AiOutlineMail /></a>
                        <a href="tel: +91 98176 08952" rel='noreferrer noopener'><AiOutlinePhone/></a>
                    </div>

                    <div>
                        <a href='/Ankit-Kumar-Resume.pdf' download className='btn'>
                            Download Resume
                        </a>
                    </div>
                    <div className={styles.skillsGrid}>
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Vite</span>
                        <span>Django</span>
                        <span>PostgreSQL</span>
                        <span>Firebase</span>
                        <span>Git</span>
                        <span>Framer Motion</span>
                        <span>Postman</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
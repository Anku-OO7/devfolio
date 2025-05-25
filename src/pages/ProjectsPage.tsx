import React from "react";
import Projects from '../components/Projects/Projects';
import styles from './ProjectsPage.module.css';

const ProjectsPage: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.pageTitle}>My Projects</h1>;
            <Projects />
        </div>
    );
};

export default ProjectsPage;
import React, { useState } from 'react';
import styles from './ProjectCard.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

type ProjectProps = {
    project: {
        title: string;
        description: string;
        techStack: string[];
        github:string;
        liveDemo:string;
        media:string;
        features:string[];
        roadmap:string[];
    };
};

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <motion.div
                className={styles.card}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{opacity: 1, y: 0}}
                transition={{ duration: 0.4 }}
            >
                <div className={styles.media}>
                    <img src={project.media} alt={project.title} />
                </div>

                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>

                <div className={styles.techStack}>
                    {project.techStack.map((tech, i) => (
                        <span key={i}>{tech}</span>
                    ))}
                </div>

                <div className={styles.links}>
                    {project.github && (
                        <a href={project.github} target='_blank' rel='noreferreer'>
                            <FaGithub /> GitHub
                        </a>
                    )}
                    {project.liveDemo && (
                        <a href={project.liveDemo} target='_blank' rel='noreferrer'>
                            <FaExternalLinkAlt /> Live Demo 
                        </a>
                    )}
                </div>

                <button className={styles.moreBtn} onClick={() => setShowModal(true)}>
                    Wanna See More →
                </button>
            </motion.div>

            {showModal && (
                <ProjectModal
                    project={project}
                    onClose={() => setShowModal(false)}
                />
            )}
        </>
    );
};

export default ProjectCard;
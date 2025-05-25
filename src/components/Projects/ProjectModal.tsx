import React from "react";
import styles from "./ProjectModal.module.css";

type Props = {
    project: {
        title: string;
        features: string[];
        roadmap: string[];
    };
    onClose: () => void;
};

const ProjectModal: React.FC<Props> = ({ project, onClose}) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button onClick={onClose} className={styles.closeBtn}>X</button>
                <h2>{project.title} — Details</h2>
                <h3>Features</h3>
                <ul>
                    {project.features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>

                <h3>Upcoming Roadmap</h3>
                <ul>
                    {project.roadmap.map((r, i) => (
                        <li key={i}>{r}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectModal;
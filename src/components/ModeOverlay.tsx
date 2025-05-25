import React from "react";
import styles from './ModeOverlay.module.css';
import { useMode } from "../context/ModeContext";

const ModeOverlay: React.FC = () => {
    const { setMode } = useMode();

    return (
        <div className={styles.overlay}>
            <div className={styles.box}>
                <h1>Choose Your Experience</h1>
                <button className={styles.btn} onClick={() => setMode("cinematic")}>
                    Cinematic Mode
                </button>
                <button className={styles.btn} onClick={() => setMode("professional")}>
                    Professional Mode
                </button>
            </div>
        </div>
    );
};

export default ModeOverlay;
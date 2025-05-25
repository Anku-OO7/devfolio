// import React from "react";
import ProjectCard from "./ProjectCard";
import styles from './Projects.module.css';

const projectList = [
    {
        title: "SkillSwap",
        description: "A collaborative learning platform that allows users to exchange skills and grow together. A platform to exchange skills and learn collaboratively with XP and gamification.",
        techStack: ["React", "Firebase", "TypeScript", "postgreSQL"],
        github: "https://github.com/Anku-OO7/skillswap-v1",
        liveDemo: "https://skillswap-v1.vercel.app/",
        media:"/assets/skillswap--preview.gif",
        features: [
            "Skill matching system",
            "Profile system with badges",
            "Skill Posting",
            "Comments"
        ],
        roadmap: [
            "Gamified XP & levels",
            "Chat and scheduling",
            "Intergrate AI learning assistant",
            "Real-time leaderboard",
            "Add video calling",
        ]
    },
    {
        title: "Devfolio",
        description: "My personal cinematic + professional portfolio built with React, Vite and custom mode toggles.",
        techStack: ["React", "Vite", "TypeScript", "CSS Modules"],
        github: "https://github.com/Anku-OO7/devfolio",
        liveDemo: "https://devfolio-fawn-seven.vercel.app/",
        media: "/assets/devfolio.gif",
        features: ["Dual Mode Toggle", "Responsive UI", "Professional/Cinematic Modes"],
        roadmap: ["Dark Mode Polish", "Custom Page Builder", "Animations Overhaul"]
    }
];

const Projects = () => {
    return (
        <section className={styles.projectsSection}>
            <div className={styles.projectGrid}>
                {projectList.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
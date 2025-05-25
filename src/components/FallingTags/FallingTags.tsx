import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './FallingTags.module.css';
import luffyStand from '../../assets/luffyStand.png';
import luffyPunch from '../../assets/luffyPunch.png';

const tags = ['', 'React', 'TypeScript', 'Firebase', 'Django', 'Full Stack', 'DSA', 'Self-Taught', 'Problem Solver' ];

const FallingTags: React.FC = () => {
    const [visibleTags, setVisibleTags] = useState<number[]>([]);
    const [punching, setPunching] = useState(false);
    const [finalPositions, setFinalPositions] = useState<{x:number, y: number}[]>([]);

    useEffect(() => {
        const positions = tags.map((_, i) => ({
            x: Math.random() * 300 - 150,
            y: 100 + Math.floor(i/4) * 80
        }));
        setFinalPositions(positions);

        tags.forEach((_, i) => {
            setTimeout(() => {
                setVisibleTags(prev => [...prev, i]);
                setTimeout(() => {
                    setPunching(true);
                    setTimeout(() => setPunching(false), 300);
                }, 800);
            }, i * 1200);
        })
    }, []);

    return (
        <div className={styles.container}>
            <motion.img src={punching ? luffyPunch : luffyStand} alt='Luffy'
                className={styles.luffy}
                animate={{
                    y: visibleTags.length === tags.length ? 200 : 0
                }}
                transition={{ duration: 0.5 }}
            />

            {tags.map((tag, i) => (
                <motion.div
                    key={tag}
                    className={styles.tag}
                    initial = {{ y: -100, x: '50%', opacity: 0 }}
                    animate={
                        visibleTags.includes(i)
                        ? {
                            y: finalPositions[i]?.y || 0,
                            x: finalPositions[i]?.x || 0,
                            opacity: 1,
                            transition: { 
                                duration: visibleTags.length === tags.length ? 1 : 0.8,
                                type: 'spring'
                            }
                          }
                        : {}
                    }
                >
                    {tag}
                </motion.div>
            ))}
        </div>
    );
};

export default FallingTags;
import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
    return (
        <div className={styles.contactSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Let's Connect</h2>
                <p className={styles.subheading}>Have a project or want to chat ?  Drop a message!</p>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" required />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your mail" required />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows={5} placeholder="Tell me..." required />
                    </div>

                    <button type="submit" className={styles.submitBtn}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
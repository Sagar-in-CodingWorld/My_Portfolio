import styles from "./About.module.css";
import React from "react";

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src="assets/about/aboutImage_2.png" className={styles.aboutImage} alt="About_Image" />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="assets/about/cursorIcon.png"  alt="Cursor_Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building optimized
                sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assets/about/serverIcon.png" alt="Server_Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimized APIs</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assets/about/uiIcon.png" alt="Ui_Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

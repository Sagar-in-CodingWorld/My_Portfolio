import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sagar</h1>
        <p className={styles.description}>
          I'm a Full-Stack developer with 1 years of experience using React and
          NodeJs. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:sagarnunia10@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="assets/hero/heroImage.png"
        alt="Iamge of Me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

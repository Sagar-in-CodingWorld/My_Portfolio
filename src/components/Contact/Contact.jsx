import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h1>Contact</h1>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="assets/contact/emailIcon.png" alt="Email Icon" />
          <a href="mailto:sagarnunia10@gmail.com">sagarnunia10@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/linkedinIcon.png" alt="Linkedin Icon" />
          <a href="https://www.linkedin.com/in/sagar-nunia-online/">linkedin.com/s-a-g-a-r</a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/githubIcon.png" alt="Github Icon" />
          <a href="https://github.com/Sagar-in-CodingWorld">Sagar-in-CodingWorld</a>
        </li>
      </ul>
    </footer>
  );
};

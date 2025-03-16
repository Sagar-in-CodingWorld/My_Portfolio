import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import axios from "axios";

export const Contact = () => {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/contact")
      .then((res) => {
        setContact(res.data);
        
      })
      .catch((error) => {
        console.log("error occured :", error);
      });
  }, []);
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h1>Contact</h1>
        <p>Feel free to reach out!</p>
      </div>
      {contact.map((con, id) => {
        const emailto = `mailto:${con.email}`;
        return (
          <ul className={styles.links} key={id}>
            <li className={styles.link}>
              <img src="assets/contact/emailIcon.png" alt="Email Icon" />
              <a href={emailto}>sagarnunia10@gmail.com</a>
            </li>
            <li className={styles.link}>
              <img src="assets/contact/linkedinIcon.png" alt="Linkedin Icon" />
              <a href={con.linkedin}>
                linkedin.com/s-a-g-a-r
              </a>
            </li>
            <li className={styles.link}>
              <img src="assets/contact/githubIcon.png" alt="Github Icon" />
              <a href={con.github}>
                Sagar-in-CodingWorld
              </a>
            </li>
          </ul>
        );
      })}
    </footer>
  );
};

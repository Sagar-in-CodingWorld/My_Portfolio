import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils.js";

export const Navbar = () => {
  const [menuOpen, SetMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          src={
            menuOpen ? "assets/nav/closeIcon.png" : "assets/nav/menuIcon.png"
          }
          alt="Menu-Button"
          className={styles.menuBtn}
          onClick={() => SetMenuOpen(!menuOpen)}
        />

        <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} onClick = {()=> SetMenuOpen(false)}>
          <li>
            <a href="#about">About</a>  
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

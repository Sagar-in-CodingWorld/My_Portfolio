import "./About.module.css";
import React from "react";

export const About = () => {
  return (
    <section>
      <h2>About</h2>
      <div>
        <img src="assets/about/aboutImage.png" alt="About_Image" />
        <ul>
          <li>
            <img src="assets/about/cursorIcon.png" alt="Cursor_Icon" />
          <div>
            <h3>Frontend Developer</h3>
            <p>I'm a frontend developer with experience in building optimized sites</p>
          </div>
            
            </li> 
          <li>
            <img src="assets/about/cursorIcon.png" alt="Cursor_Icon" />
          <div>
            <h3>Backend Developer</h3>
            <p>I have experience developing fast and optimized and APIs</p>
          </div>
            
            </li> 
          <li>
            <img src="assets/about/cursorIcon.png" alt="Cursor_Icon" />
          <div>
            <h3>UI Designer</h3>
            <p>I have designed multiple landing pages and have systems as well</p>
          </div>
            
            </li> 
        </ul>
      </div>
    </section>
  );
};

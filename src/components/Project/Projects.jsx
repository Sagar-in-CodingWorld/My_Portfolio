import React from "react";
import styles from "./Projects.module.css"; 
import projects from "../../data/project.json";
import { ProjectCard } from "./ProjectCard.jsx";
export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title} >Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          // console.log(`parent component id value : ${id}`)
          return (
            // <ProjectCard key={id} project={project}/>
            <ProjectCard project={project} key={id} /> //     #KEY
          );
        })}
      </div>
    </section>
  );
};

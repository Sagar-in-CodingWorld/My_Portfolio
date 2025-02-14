import React from "react";
// export const ProjectCard = (projects : {title, imageSrc, description, skills, demo, source}) => {
import styles from "./ProjectCard.module.css";

//Using Props data fetching from parent function
export const ProjectCard = ({ project, id }) => {
  // console.log()
  return (
    <div key={id} className={styles.container}>
      <img
        src={project.imageSrc}
        alt={`Image of ${project.title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, id) => {
          <li  className={styles.skill} key={id}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a href={project.demo} className={styles.link}>Demo</a>
        <a href={project.source} className={styles.link}>Source</a>
      </div>
    </div>
  );
};

// export const ProjectCard = (props) => {
//   return (
//     <div key={props.id}>
//       <img src={props.project.imageSrc} alt={`Image of ${props.project.title}`} />
//       <h3>{props.project.title}</h3>
//       <p>{props.project.description}</p>
//       <ul>
//         {props.project.skills.map((skill, id) => {
//           <li key={id}>{skill}</li>;
//         })}
//       </ul>
//       <div>
//         <a href={props.project.demo}>Demo</a>
//         <a href={props.project.source}>Source</a>
//       </div>
//     </div>
//   );
// };

// ProjectCard.defaultProps = {
//             imageSrc : {assets/project/project.png}
// }

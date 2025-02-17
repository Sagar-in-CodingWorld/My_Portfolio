import React from "react";
// export const ProjectCard = (projects : {title, imageSrc, description, skills, demo, source}) => {
import styles from "./ProjectCard.module.css";

//Using Props data fetching from parent function
export const ProjectCard = ({ project, id }) => {
  
  // destructuring the Project Array
  const { imageSrc, title, description, skills, demo, source } = project;
  return (
    <div key={id} className={styles.container}>
      <img src={imageSrc} alt={`Image of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skilled, id) => {
          <li className={styles.skill} key={id}>
            {skilled}
          </li>;
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
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

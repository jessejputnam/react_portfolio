// Import CSS
import styles from "./Project.module.css";

const Project = (props) => {
  const reverseRow = props.reverse;
  const ProjectStyle = reverseRow
    ? `${styles.reverse} ${styles.Project}`
    : styles.Project;

  return (
    <div className={ProjectStyle}>
      <div
        className={`${styles.project_detail} ${styles.project_img_container}`}
      >
        <img src={props.src} alt={props.alt} className={styles.project_img} />
      </div>
      <div className={`${styles.project_detail} ${styles.project_info}`}>
        <hr />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button type='button'>VIEW PROJECT</button>
        <hr />
      </div>
    </div>
  );
};

export default Project;

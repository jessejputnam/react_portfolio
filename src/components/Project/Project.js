// Import CSS
import styles from "./Project.module.css";

const Project = (props) => {
  const reverseRow = props.reverse;
  const ProjectStyle = reverseRow
    ? `${styles.reverse} ${styles.Project}`
    : styles.Project;
  const description = props.desc.map((point) => (
    <li key={Math.random()}>{point}</li>
  ));

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
        <ul className={styles.desc}>{description}</ul>
        <div className={styles.btns_container}>
          <a
            href={props.liveSiteLink}
            target='_blank'
            rel='noreferrer noopener'
          >
            <button type='button'>LIVE SITE</button>
          </a>
          <a href={props.codeLink} target='_blank' rel='noreferrer noopener'>
            <button type='button'>CODE</button>
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Project;

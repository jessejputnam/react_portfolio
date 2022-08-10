// Import CSS
import styles from "./Skill.module.css";

const Skill = (props) => {
  return (
    <div className={styles.Skill}>
      <img
        className={styles.image}
        src={props.skillImg}
        alt={props.skillName}
      />
      <p>{props.skillName}</p>
    </div>
  );
};

export default Skill;

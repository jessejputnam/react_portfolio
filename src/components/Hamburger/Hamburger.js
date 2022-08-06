// Import CSS
import styles from "./Hamburger.module.css";

const Hamburger = () => {
  return (
    <div className={styles.Hamburger}>
      <div className={`${styles.bar} ${styles.barTop}`}></div>
      <div className={`${styles.bar} ${styles.barMid}`}></div>
      <div className={`${styles.bar} ${styles.barBot}`}></div>
    </div>
  );
};

export default Hamburger;

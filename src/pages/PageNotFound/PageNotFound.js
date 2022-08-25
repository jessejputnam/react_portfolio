// Import CSS
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.PageNotFound}>
      <div className={styles.container}>
        <div className={styles.letters_container}>
          <div>4</div>
          <div>0</div>
          <div>4</div>
          <div>:</div>
        </div>
        <div className={styles.letters_container}>
          <div>P</div>
          <div>A</div>
          <div>G</div>
          <div>E</div>
        </div>
        <div className={styles.letters_container}>
          <div>N</div>
          <div>O</div>
          <div>T</div>
        </div>
        <div className={styles.letters_container}>
          <div>F</div>
          <div>O</div>
          <div>U</div>
          <div>N</div>
          <div>D</div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

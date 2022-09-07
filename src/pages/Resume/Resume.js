// Import React-PDF
import Pdf from "../../components/Pdf/Pdf";

// Import assets
import resume from "../../images/personal/resume.pdf";

// Import styles
import styles from "./Resume.module.css";

const Resume = () => {
  // const [numPages, setNumPages]

  return (
    <div className={styles.Resume}>
      <Pdf pdf={resume} />
    </div>
  );
};

export default Resume;

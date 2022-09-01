// Import Components
import Skill from "../Skill/Skill";

// Import Functions
import { importImgFolder } from "../../helper_functions/helper_functions";

// Import CSS
import styles from "./Statement.module.css";

// Import Skill Images
const langs = importImgFolder(
  require.context("../../images/icons/languages", false, /\.(png|jpe?g|svg)$/)
);

// Import CSS

const Statement = () => {
  return (
    <div className={styles.Statement}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className={styles.marquee}>
        <div className={styles.skills_container}>
          <Skill skillImg={langs.html} skillName='HTML5' />
          <Skill skillImg={langs.css} skillName='CSS3' />
          <Skill skillImg={langs.js} skillName='JavaScript' />
          <Skill skillImg={langs.react} skillName='React' />
          <Skill skillImg={langs.node} skillName='Node' />
          <Skill skillImg={langs.express} skillName='Express' />
          <Skill skillImg={langs.mongodb} skillName='MongoDB' />
          <Skill skillImg={langs.firebase} skillName='Firebase' />
        </div>
        <div aria-hidden='true' className={styles.skills_container}>
          <Skill skillImg={langs.html} skillName='HTML5' />
          <Skill skillImg={langs.css} skillName='CSS3' />
          <Skill skillImg={langs.js} skillName='JavaScript' />
          <Skill skillImg={langs.react} skillName='React' />
          <Skill skillImg={langs.node} skillName='Node' />
          <Skill skillImg={langs.express} skillName='Express' />
          <Skill skillImg={langs.mongodb} skillName='MongoDB' />
          <Skill skillImg={langs.firebase} skillName='Firebase' />
        </div>
      </div>
    </div>
  );
};

export default Statement;

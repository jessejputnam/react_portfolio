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
        Web developer dedicated to building, maintaining, and expanding highly
        usable, responsive websites and applications. Previously, I worked as a
        Middle/High School teacher in English Language Arts for students
        identified as Gifted &amp; Talented. Strong skills in building teams and
        working collaboratively to deliver on team goals. Proficient in
        communication on multiple levels to deliver complex content in
        digestible units.
      </p>
      <div className={styles.marquee}>
        <div className={styles.skills_container}>
          <Skill skillImg={langs.html} skillName='HTML5' />
          <Skill skillImg={langs.css} skillName='CSS3' />
          <Skill skillImg={langs.js} skillName='JavaScript' />
          <Skill
            skillImg='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
            skillName='TypeScript'
          />
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
          <Skill
            skillImg='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
            skillName='TypeScript'
          />
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

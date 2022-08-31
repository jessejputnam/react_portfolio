// Import Components
import Skill from "../Skill/Skill";

// Import Functions
import { importImgFolder } from "../../helper_functions/helper_functions";

// Import CSS
import styles from "./About.module.css";

// Import Skill Images
const langs = importImgFolder(
  require.context("../../images/icons/languages", false, /\.(png|jpe?g|svg)$/)
);

const About = () => {
  return (
    <section className={styles.About}>
      <hr className={styles.hr} />
      <div className={styles.text_container}>
        <p className={styles.about_text}>
          I’m a front-end developer transitioning from high school teaching. I
          am self-driven and independent, learning to code on my own through
          documentation, challenges, textbooks, online courses, and projects. I
          am currently based in Western MA, but I’m looking to relocate and
          willing to work remotely as well.
        </p>

        <p className={styles.about_text}>
          I am proficient in Vanilla JavaScript (ES6+, as well as ES5), React,
          responsive CSS3, and semantic HTML5. I am currently learning backend
          tools and frameworks such as Firebase, Node.js, Express, and MongoDB.
        </p>
      </div>
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
      <hr className={styles.hr} />
    </section>
  );
};

export default About;

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
      <hr />
      <p className={styles.about_text}>
        I’m an aspiring junior front-end developer transitioning careers. I am
        self-driven and independent, learning to code on my own through
        documentation, challenges, textbooks, online courses, and projects. I am
        currently based in Western MA, but I’m looking to relocate and willing
        to work remotely as well.
      </p>
      <div className={styles.skills_container}>
        <Skill skillImg={langs.html} skillName='HTML5' />
        <Skill skillImg={langs.css} skillName='CSS3' />
        <Skill skillImg={langs.js} skillName='JavaScript' />
        <Skill skillImg={langs.react} skillName='React' />
        <Skill skillImg={langs.node} skillName='NodeJS' />
        <Skill skillImg={langs.mongodb} skillName='MongoDB' />
        <Skill skillImg={langs.firebase} skillName='Firebase' />
      </div>
      <hr />
    </section>
  );
};

export default About;

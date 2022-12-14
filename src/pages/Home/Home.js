// Import Components
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Statement from "../../components/Statement/Statement";

// Import CSS
import styles from "./Home.module.css";

const Home = function (props) {
  const homeStyles = props.menuIsOpen ? `${styles.Home} blur` : styles.Home;

  return (
    <div id='Home' className={homeStyles}>
      <Hero />
      <Statement />
      <Projects />
    </div>
  );
};

export default Home;

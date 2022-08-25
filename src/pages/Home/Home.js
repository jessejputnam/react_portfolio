// Import Components
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";

// Import CSS
import styles from "./Home.module.css";

const Home = function (props) {
  const homeStyles = props.menuIsOpen ? `${styles.Home} blur` : styles.Home;

  return (
    <div id='Home' className={homeStyles}>
      <Hero />
      <About />
    </div>
  );
};

export default Home;

// Import Components
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";

// Import CSS
import styles from "./Home.module.css";

const Home = function (props) {
  const homeStyles = props.menuIsOpen ? `${styles.Home} blur` : styles.Home;

  const test = () => {
    console.log(props);
  };

  return (
    <div id='Home' className={homeStyles}>
      <Hero />
      <About />
      <button onClick={test}>Check</button>
    </div>
  );
};

export default Home;

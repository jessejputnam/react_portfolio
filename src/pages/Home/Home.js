// Import Components
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";

// Import CSS
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Hero />
      <About />
    </div>
  );
};

export default Home;

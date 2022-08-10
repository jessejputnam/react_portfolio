// Import Components
import TitleCard from "../TitleCard/TitleCard";

// Import CSS
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <TitleCard />
    </div>
  );
};

export default Hero;

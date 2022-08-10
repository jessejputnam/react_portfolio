// Import React Tools
// import { useState } from "react";

// Import Components
import Hamburger from "../Hamburger/Hamburger";
import NavMenu from "../NavMenu/NavMenu";

// Import assets
import github from "../../images/icons/links/github.png";
import linkedin from "../../images/icons/links/linkedin.png";

// Import CSS
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <header>
        <div className={styles.socials}>
          <a
            href='https://github.com/jessejputnam'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className={styles.social_img} src={github} alt='Github' />
          </a>
          <a
            href='https://www.linkedin.com/in/jesse-putnam-53830622a/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className={styles.social_img} src={linkedin} alt='LinkedIn' />
          </a>
        </div>
        <nav className={styles.desktop_nav}>
          <button>About</button>
          <button>Projects</button>
          <button>Contact</button>
        </nav>
        {<Hamburger />}
        {<NavMenu />}
      </header>
    </div>
  );
};

export default Header;

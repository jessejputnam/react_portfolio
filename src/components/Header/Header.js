// Import React Tools
// import { useState } from "react";

// Import Components
import Hamburger from "../Hamburger/Hamburger";
import NavMenu from "../NavMenu/NavMenu";

// Import assets
import logo from "../../images/icons/logo.svg";

// Import CSS
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <header>
        <img src={logo} alt='Logo' />
        <nav>
          {<Hamburger />}
          {<NavMenu />}
        </nav>
      </header>
    </div>
  );
};

export default Header;

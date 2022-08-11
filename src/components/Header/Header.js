// Import React Tools
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Import Components
import Hamburger from "../Hamburger/Hamburger";
import NavMenu from "../NavMenu/NavMenu";

// Import assets
import github from "../../images/icons/links/github.png";
import linkedin from "../../images/icons/links/linkedin.png";

// Import CSS
import styles from "./Header.module.css";

const Header = (props) => {
  const [curPage, setCurPage] = useState("/");
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const btns = document.getElementsByTagName("button");

  const handleNav = (childData) => {
    navigate(childData);
  };

  const toggleMenu = (childData) => {
    props.toggleMenu(childData);
  };

  useEffect(() => {
    setCurPage(location);
    Array.from(btns).forEach((btn) =>
      btn.id === location
        ? btn.classList.add("current_page")
        : btn.classList.remove("current_page")
    );
  }, [location, btns]);

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
          <button
            onClick={() => navigate("/")}
            className={styles.current_page}
            id='/'
          >
            Home
          </button>
          <button onClick={() => navigate("/projects")} id='/projects'>
            Projects
          </button>
          <button onClick={() => navigate("contact")} id='/contact'>
            Contact
          </button>
        </nav>
        {<Hamburger menuIsOpen={toggleMenu} />}
        {<NavMenu menuIsOpen={props.mobileMenuOpen} />}
      </header>
    </div>
  );
};

export default Header;

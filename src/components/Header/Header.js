// Import React Tools
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Import Components
import Hamburger from "../Hamburger/Hamburger";
import NavMenu from "../NavMenu/NavMenu";

// Import assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// Import CSS
import styles from "./Header.module.css";

const Header = (props) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const btns = document.getElementsByTagName("button");

  const handleMobileNav = (childData) => {
    navigate(childData.nav);
    props.toggleMenu(childData.menu);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  const goToPage = (e) => {
    navigate(`/react_portfolio${e.target.id}`);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  const toggleMenu = (childData) => {
    props.toggleMenu(childData);
  };

  useEffect(() => {
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
            <FontAwesomeIcon
              icon={faGithub}
              size='2x'
              className={styles.social_img}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/jesse-putnam-53830622a/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size='2x'
              className={styles.social_img}
            />
          </a>
        </div>
        <nav className={styles.desktop_nav}>
          <button onClick={goToPage} className={styles.current_page} id='/'>
            Home
          </button>
          <button onClick={goToPage} id='/resume'>
            Resumé
          </button>
          <button onClick={goToPage} id='/contact'>
            Contact
          </button>
        </nav>
        {<Hamburger menuIsOpen={props.menuIsOpen} toggleMenu={toggleMenu} />}
        {
          <NavMenu
            menuIsOpen={props.mobileMenuOpen}
            handleMobileNav={handleMobileNav}
          />
        }
      </header>
    </div>
  );
};

export default Header;

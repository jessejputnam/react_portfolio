// Import CSS
import styles from "./NavMenu.module.css";

const NavMenu = (props) => {
  console.log(props.menuIsOpen);
  const getNav = () => {
    // props.handleNav()
  };

  const NavMenuStyle = props.menuIsOpen
    ? `open_menu ${styles.NavMenu}`
    : styles.NavMenu;

  const mobileNavStyle = props.menuIsOpen
    ? `open_nav_menu ${styles.mobileNav}`
    : styles.mobileNav;

  return (
    <div className={NavMenuStyle}>
      <nav className={mobileNavStyle}>
        <button onClick={getNav} className={styles.current_page} id='/'>
          Home
        </button>
        <button onClick={getNav} id='/projects'>
          Projects
        </button>
        <button onClick={getNav} id='/contact'>
          Contact
        </button>
      </nav>
    </div>
  );
};

export default NavMenu;

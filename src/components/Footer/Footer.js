// Import assets
import github from "../../images/icons/links/github.png";
import linkedin from "../../images/icons/links/linkedin.png";

// Import CSS
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <footer>
        <div className={styles.social_container}>
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
        <div className={styles.contact}>
          <ul>
            <li>Email me:</li>
            <li>jessejputnam@gmail.com</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

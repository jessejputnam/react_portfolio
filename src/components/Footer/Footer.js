// Import React tools
import { useNavigate } from "react-router-dom";

// Import assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import mail from "../../images/icons/mail.svg";
import signature from "../../images/personal/signature.png";

// Import CSS
import styles from "./Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();

  const goToPage = (e) => {
    navigate(e.target.id);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={styles.Footer}>
      <footer className={styles.footer}>
        <div className={styles.social_container}>
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
          <img
            onClick={goToPage}
            className={styles.signature}
            id='/easteregg'
            src={signature}
            alt='Signature'
          />
        </div>
        <div className={styles.contact}>
          <a href='mailto:jessejputnam@gmail.com'>
            <img className={styles.mail} src={mail} alt='Email' />
          </a>

          <a className={styles.email} href='mailto:jessejputnam@gmail.com'>
            jessejputnam@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

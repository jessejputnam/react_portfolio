// Import React Tools
import { useState } from "react";

// Import CSS
import styles from "./Hamburger.module.css";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const openMenu = (e) => {
    const target = e.target.closest(".hamMenu");
    setOpen(!open);

    if (open) {
      target.children[0].classList = `${styles.bar} ${styles.barTop} ${styles.barTop_close}`;
      target.children[1].classList = `${styles.bar} ${styles.barMid} ${styles.barMid_close}`;
      target.children[2].classList = `${styles.bar} ${styles.barBot} ${styles.barBot_close}`;
    } else {
      target.children[0].classList = `${styles.bar} ${styles.barTop}`;
      target.children[1].classList = `${styles.bar} ${styles.barMid}`;
      target.children[2].classList = `${styles.bar} ${styles.barBot}`;
    }
  };

  return (
    <div onClick={openMenu} className={`hamMenu ${styles.Hamburger}`}>
      <div className={`${styles.bar} ${styles.barTop}`}></div>
      <div className={`${styles.bar} ${styles.barMid}`}></div>
      <div className={`${styles.bar} ${styles.barBot}`}></div>
    </div>
  );
};

export default Hamburger;

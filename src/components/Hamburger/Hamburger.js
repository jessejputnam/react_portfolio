// Import CSS
import styles from "./Hamburger.module.css";

const Hamburger = (props) => {
  const open = props.menuIsOpen;

  let barTop, barMid, barBot;

  if (open) {
    barTop = `${styles.bar} ${styles.barTop} ${styles.barTop_close}`;
    barMid = `${styles.bar} ${styles.barMid} ${styles.barMid_close}`;
    barBot = `${styles.bar} ${styles.barBot} ${styles.barBot_close}`;
  } else {
    barTop = `${styles.bar} ${styles.barTop}`;
    barMid = `${styles.bar} ${styles.barMid}`;
    barBot = `${styles.bar} ${styles.barBot}`;
  }

  const openMenu = () => {
    const newValue = !open;
    props.toggleMenu(newValue);

    if (!open) {
      barTop = `${styles.bar} ${styles.barTop} ${styles.barTop_close}`;
      barMid = `${styles.bar} ${styles.barMid} ${styles.barMid_close}`;
      barBot = `${styles.bar} ${styles.barBot} ${styles.barBot_close}`;
    } else {
      barTop = `${styles.bar} ${styles.barTop}`;
      barMid = `${styles.bar} ${styles.barMid}`;
      barBot = `${styles.bar} ${styles.barBot}`;
    }
  };

  return (
    <div onClick={openMenu} className={`hamMenu ${styles.Hamburger}`}>
      <div className={barTop}></div>
      <div className={barMid}></div>
      <div className={barBot}></div>
    </div>
  );
};

export default Hamburger;

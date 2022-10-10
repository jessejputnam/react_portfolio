// Import CSS
import styles from "./EasterEgg.module.css";

const EasterEgg = () => {
  return (
    <div className={styles.EasterEgg}>
      <iframe
        src='https://www.youtube.com/embed/zEA2vM0H_8k'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        className={styles.iframe}
      ></iframe>

      <div>
        <a
          className='link'
          target='_blank'
          rel='noreferrer'
          href='https://soundcloud.com/jesse-putnam-10253732'
        >
          Soundcloud
        </a>
      </div>
    </div>
  );
};

export default EasterEgg;

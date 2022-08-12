// Import Components
import Project from "../../components/Project/Project";
import { importImgFolder } from "../../helper_functions/helper_functions";

// Import CSS
import styles from "./Projects.module.css";

const imgs = importImgFolder(
  require.context("../../images/projects", false, /\.(png|jpe?g|svg)$/)
);

const desc1 =
  "A responsive application that uses API calls to display local weather data, as well as allowing the user to search for weather data for any city in the world. I used webpack as a module bundler. APIs were used for the weather data.";
const desc2 =
  "A recreation of the classic boardgame Battleship for mobile and desktop users. Project was developed with a focus on Test Driven Development and isolating application functionality in a modular design pattern.";
const desc3 =
  "A responsive clone of the popular word guessing game. I used CSS flexbox and animations to create a smooth gameplay experience. JavaScript is extensively used for game logic and interactivity through DOM manipulation, as well as for optional dark mode palette swap.";
const desc4 =
  "Built using React, this project gives the user an editable form that generates a professional-looking CV or resumé. I focused on effectively using state and props for passing data between components.";
const desc5 =
  "This project was to help a young cousin play Pokemon Go. The app uses JavaScript to make API calls to outside databases to obtain information for type effectiveness in the game.";
const desc6 =
  "This project required me to build a fully responsive landing page for a fake bank, working from a FIGMA design file. I created and organized the HTML and CSS, using flexbox for responsiveness and JavaScript for mobile menu interactivity.";
const desc7 =
  "A responsive ToDo app that stores data in LocalStorage. The app allows users to create multiple lists each containing multiple task items. Task items can be marked according to priority/completed status. Tasks can be added, edited, and deleted, and sorted";

const Projects = () => {
  return (
    <div className={styles.Projects}>
      {
        <Project
          reverse={false}
          src={imgs.weather}
          alt='Weather App'
          title='Weather or Not'
          desc={desc1}
        />
      }
      {
        <Project
          reverse={true}
          src={imgs.battleship}
          alt='Battleship'
          title='Battleship'
          desc={desc2}
        />
      }
      {
        <Project
          reverse={false}
          src={imgs.wordle}
          alt='Wordle Clone'
          title='le Word'
          desc={desc3}
        />
      }
      {
        <Project
          reverse={true}
          src={imgs.cv}
          alt='CV Generator'
          title='CV Generator'
          desc={desc4}
        />
      }
      {
        <Project
          reverse={false}
          src={imgs.pokemon}
          alt='Pokemon App'
          title='Better Battle Buddy'
          desc={desc5}
        />
      }
      {
        <Project
          reverse={true}
          src={imgs.landing}
          alt='Landing Page'
          title='Fake Bank Landing Page'
          desc={desc6}
        />
      }
      {
        <Project
          reverse={false}
          src={imgs.todo}
          alt='Todo App'
          title='Due It!'
          desc={desc7}
        />
      }
    </div>
  );
};

export default Projects;

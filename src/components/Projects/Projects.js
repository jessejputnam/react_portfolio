// Import Components
import Project from "../../components/Project/Project";
import { importImgFolder } from "../../helper_functions/helper_functions";

// Import CSS
import styles from "./Projects.module.css";

const imgs = importImgFolder(
  require.context("../../images/projects", false, /\.(png|jpe?g|svg)$/)
);

const desc1 = [
  "JS, Node, Express, MongoDB, Mongoose",
  "‣ Fully responsive, full-stack inventory system for Pokémon trading cards",
  "‣ Authentication system with PassportJS for secure and individual collections",
  "‣ Users can search cards from the Pokémon TCG API and add them to their collection",
  "‣ Users can update card market value in real time and create a timeline of value"
];
const desc2 = [
  "JS, React, ReactRouter, Jest",
  "‣ Responsive fake eCommerce site selling string instruments",
  "‣ Shopping cart functionality (add, delete, and update total price) from selection pages of inventory items",
  "‣ Cart live updates price and selected items"
];
const desc3 = [
  "JS, Webpack",
  "‣ Responsive application that automatically checks local weather",
  "‣ Uses OpenWeather for API calls to get weather data",
  "‣ Users can search for any city in the world and get instant weather data",
  "‣ Searches can manage homonymous cities"
];
const desc4 = [
  "JS, Node, Express, MongoDB, Mongoose",
  "‣ Fully responsive, full-stack mock storefront with inventory",
  "‣ MVC architecture for easy extensibility",
  "‣ Users can Create, Read, Update, and Delete items",
  "‣ Items and categories linked for easy navigation"
];
const desc5 = [
  "JS, CSS, HTML",
  "‣ A responsive clone of the popular word guessing game, Wordle",
  "‣ Used flexbox and animations to create a smooth gameplay experience",
  "‣ Toggle dark mode palette swap",
  "‣ Focus on vanilla JavaScript DOM manipulation"
];
const desc6 = [
  "JS, Jest, Webpack",
  "‣ Responsive recreation of classic boardgame Battleship: player vs computer",
  "‣ Focus on test-driven development using Jest",
  "‣ Players set ship position and play against computer"
];

const Projects = (props) => {
  const projectsStyles = props.menuIsOpen
    ? `${styles.Projects} blur`
    : styles.Projects;

  return (
    <div className={projectsStyles}>
      {
        <Project
          styleVar='e'
          reverse={false}
          src={imgs.cardcollector}
          alt='Card Collection App'
          title='Card Collector'
          codeLink='https://github.com/jessejputnam/card-collector'
          liveSiteLink='https://card-collector.onrender.com/'
          desc={desc1}
        />
      }
      {
        <Project
          styleVar='c'
          reverse={true}
          src={imgs.cart}
          alt='React Shopping Cart'
          title='Modal Shopping Cart'
          codeLink='https://github.com/jessejputnam/shopping-cart'
          liveSiteLink='https://jessejputnam.github.io/shopping-cart/'
          desc={desc2}
        />
      }
      {
        <Project
          styleVar='b'
          reverse={false}
          src={imgs.weather}
          alt='Weather App'
          title='Weather or Not'
          codeLink='https://github.com/jessejputnam/weather-app'
          liveSiteLink='https://jessejputnam.github.io/weather-app/'
          desc={desc3}
        />
      }
      {
        <Project
          styleVar='a'
          reverse={true}
          src={imgs.stringtheory}
          alt='Inventory App'
          title='String Theory Express'
          codeLink='https://github.com/jessejputnam/string-theory-express'
          liveSiteLink='https://string-theory-express.onrender.com/'
          desc={desc4}
        />
      }
      {
        <Project
          styleVar='f'
          reverse={false}
          src={imgs.wordle}
          alt='Wordle Clone'
          title='le Word'
          codeLink='https://github.com/jessejputnam/wordle-clone'
          liveSiteLink='https://jessejputnam.github.io/wordle-clone/'
          desc={desc5}
        />
      }
      {
        <Project
          styleVar='g'
          reverse={true}
          src={imgs.battleship}
          alt='Battleship'
          title='Battleship'
          codeLink='https://github.com/jessejputnam/battleship'
          liveSiteLink='https://jessejputnam.github.io/battleship/'
          desc={desc6}
        />
      }
    </div>
  );
};

export default Projects;

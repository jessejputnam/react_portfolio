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
  "‣ Fully responsive, full-stack mock storefront with inventory",
  "‣ MVC architecture for easy extensibility",
  "‣ Users can Create, Read, Update, and Delete items",
  "‣ Items and categories linked for easy navigation"
];
const desc2 = [
  "JS, Webpack",
  "‣ Responsive application that automatically checks local weather",
  "‣ Uses OpenWeather for API calls to get weather data",
  "‣ Users can search for any city in the world and get instant weather data",
  "‣ Searches can manage homonymous cities"
];
const desc3 = [
  "React, ReactRouter, Jest",
  "‣ Responsive fake eCommerce site selling string instruments",
  "‣ Shopping cart functionality (add, delete, and update total price) from selection pages of inventory items",
  "‣ Cart live updates price and selected items"
];
const desc4 = [
  "JS, Node, Express, MongoDB, Mongoose, Passport",
  "‣ Message board with different accessability depending on user authentication",
  "‣ Users can submit messages for anonymous public viewing",
  "‣ Users can view author and date of messages with premium membership"
];
const desc5 = [
  "JS, CSS, HTML",
  "‣ A responsive clone of the popular word guessing game, Wordle",
  "‣ Used flexbox and animations to create a smooth gameplay experience",
  "‣ Toggle dark mode palette swap",
  "‣ Focus on vanilla JavaScript DOM manipulation"
];
const desc6 = [
  "React, Flexbox, Webpack",
  "‣ A responsive CV / résumé generator",
  "‣ Users can input their information and the generator will automatically format the information presentably",
  "‣ Form elements live update as user types by tying onChange to state in React components",
  "‣ Users can edit/delete information after submission",
  "‣ Users can hide edit buttons for printable look"
];
const desc7 = [
  "JS, Flexbox, API",
  "‣ A PokémonGo helper app that allows users to input opponent Pokemon names and ascertain effective offensive types as well as suggested Pokémon to use against opponent",
  "‣ Focus on promises, asynchronous JS, and API calls"
];
const desc8 = [
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
          styleVar='a'
          reverse={false}
          src={imgs.stringtheory}
          alt='Inventory App'
          title='String Theory Express'
          codeLink='https://github.com/jessejputnam/string-theory-express'
          liveSiteLink='https://stringtheoryexpresstest.herokuapp.com/'
          desc={desc1}
        />
      }
      {
        <Project
          styleVar='b'
          reverse={true}
          src={imgs.weather}
          alt='Weather App'
          title='Weather or Not'
          codeLink='https://github.com/jessejputnam/weather-app'
          liveSiteLink='https://jessejputnam.github.io/weather-app/'
          desc={desc2}
        />
      }
      {
        <Project
          styleVar='c'
          reverse={false}
          src={imgs.cart}
          alt='React Shopping Cart'
          title='Modal Shopping Cart'
          codeLink='https://github.com/jessejputnam/shopping-cart'
          liveSiteLink='https://jessejputnam.github.io/shopping-cart/'
          desc={desc3}
        />
      }
      {
        <Project
          styleVar='d'
          reverse={true}
          src={imgs.exclusieve}
          alt='Messageboard'
          title='Messageboard'
          codeLink='https://github.com/jessejputnam/members-only'
          liveSiteLink='https://exclusieve.herokuapp.com/'
          desc={desc4}
        />
      }
      {
        <Project
          styleVar='e'
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
          styleVar='f'
          reverse={true}
          src={imgs.cv}
          alt='CV Generator'
          title='CV Generator'
          codeLink='https://github.com/jessejputnam/cv-project'
          liveSiteLink='https://jessejputnam.github.io/cv-project/'
          desc={desc6}
        />
      }
      {
        <Project
          styleVar='g'
          reverse={false}
          src={imgs.pokemon}
          alt='Pokemon App'
          title='Better Battle Buddy'
          codeLink='https://github.com/jessejputnam/better-battle-buddy'
          liveSiteLink='https://jessejputnam.github.io/better-battle-buddy/'
          desc={desc7}
        />
      }
      {
        <Project
          styleVar='h'
          reverse={true}
          src={imgs.battleship}
          alt='Battleship'
          title='Battleship'
          codeLink='https://github.com/jessejputnam/battleship'
          liveSiteLink='https://jessejputnam.github.io/battleship/'
          desc={desc8}
        />
      }
    </div>
  );
};

export default Projects;

// Import React Tools
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Import Pages
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

// Import CSS
import styles from "./App.module.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = (childData) => {
    setIsMenuOpen(childData);
  };

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header
          toggleMenu={handleToggleMenu}
          mobileMenuOpen={isMenuOpen}
          menuIsOpen={isMenuOpen}
        />
        <div className={styles.pages_wrapper}>
          <Routes>
            <Route exact path='/' element={<Home menuIsOpen={isMenuOpen} />} />
            <Route
              exact
              path='/projects'
              element={<Projects menuIsOpen={isMenuOpen} />}
            />
            <Route
              path='*'
              element={<PageNotFound menuIsOpen={isMenuOpen} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

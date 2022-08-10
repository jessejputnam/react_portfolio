// Import React Tools
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Header from "../components/Header/Header";

// Import Pages
import Home from "../pages/Home/Home";

import PageNotFound from "../pages/PageNotFound/PageNotFound";

// Import CSS
import styles from "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
        <div className={styles.pages_wrapper}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

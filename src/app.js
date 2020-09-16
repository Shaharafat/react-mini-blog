import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "./components/ThemeContext.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "normalize.css";
import "./app.css";

import Home from "./pages/Home.jsx";

const app = () => {
  const [hamburgerStatus, toggleHamburger] = useState(false);

  const [currentTheme, toggleTheme] = useState(themes.light);
  const changeTheme = () => {
    toggleTheme(currentTheme === themes.light ? themes.dark : themes.light);
  }

  const hamburgerToggle = () => {
    toggleHamburger(!hamburgerStatus);
  };

  return (
    <>
      <ThemeContext.Provider value={currentTheme}>
        <Router>
          <div className="bg-light">
            <Home
              hamburgerStatus={hamburgerStatus}
              hamburgerToggle={hamburgerToggle}
              changeTheme={changeTheme}
            />
          </div>
        </Router>
      </ThemeContext.Provider>
    </>
  );
};

export default app;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "normalize.css";
import "./app.css";

import Home from "./pages/Home.jsx";

// document.body.className = "bg-light";
const app = () => {
  const [hamburgerStatus, toggleHamburger] = useState(false);

  const hamburgerToggle = () => {
    toggleHamburger(!hamburgerStatus);
  };

  return (
    <>
      <Router>
        <div className="bg-light">
          <Home
            hamburgerStatus={hamburgerStatus}
            hamburgerToggle={hamburgerToggle}
          />
        </div>
      </Router>
    </>
  );
};

export default app;

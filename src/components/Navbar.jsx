import React, { useContext } from "react";
import { ThemeContext, themes } from "./ThemeContext.jsx";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ hamburgerStatus, hamburgerToggle, changeTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <nav className="navbar" style={{ background: theme.foreground }}>
      <h1
        className="navbar__logo"
        onClick={hamburgerStatus === true ? hamburgerToggle : undefined}
      >
        <Link style={{ color: theme.font }} to="/">
          Mini Blog
        </Link>
      </h1>
      <button
        className="navbar__theme-toggle"
        style={{ background: theme.toggle, color: theme.foreground }}
        onClick={changeTheme}
      >
        {theme === themes.dark ? (
          <>
            <span>Light </span>
            <span style={{ color: theme.foreground }}>
              <FontAwesomeIcon icon={faSun} />
            </span>
          </>
        ) : (
          <>
            <span>Dark </span>
            <span style={{ color: theme.foreground }}>
              <FontAwesomeIcon icon={faMoon} />
            </span>
          </>
        )}
      </button>
      <span className="navbar__hamburger" style={{color:theme.font}} onClick={hamburgerToggle}>
        {hamburgerStatus ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </span>
      <div className="navbar__links-container">
        <ul
          className={`navbar__links fr-light ${
            hamburgerStatus ? "active" : ""
          }  `}
          style={{ background: theme.foreground }}
        >
          <li onClick={hamburgerToggle}>
            <Link
              style={{ color: theme.font, background: theme.background }}
              to="/"
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

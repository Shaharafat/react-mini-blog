import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ hamburgerStatus, hamburgerToggle }) => {
  return (
    <nav className="navbar fr-light">
      <h1
        className="navbar__logo"
        onClick={hamburgerStatus === true ? hamburgerToggle : undefined}
      >
        <Link to="/">Mini Blog</Link>
      </h1>
      <button className="navbar__theme-toggle">Light</button>
      <span className="navbar__hamburger" onClick={hamburgerToggle}>
        {hamburgerStatus ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </span>
      <div className='navbar__links-container'>
        <ul className={`navbar__links fr-light ${hamburgerStatus ? "active" : ""}  `}>
          <li onClick={hamburgerToggle}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={hamburgerToggle} >
            <Link to="/bookmark">Bookmark</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

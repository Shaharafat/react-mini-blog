import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="footer">
      <p className="Footer__Text" style={{color:theme.font}}>
        <FontAwesomeIcon className="footer__heart" icon={faHeart}/>  JavaScript - React - React Router -{" "}
        <a href="https://github.com/shaharafat" target="_blank" className="footer__link">
          Shah Arafat
        </a>
      </p>
    </div>
  );
};

export default Footer;

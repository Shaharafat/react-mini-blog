import React, { useContext } from "react";

import { ThemeContext } from "../components/ThemeContext.jsx";
import { Link } from "react-router-dom";
import "./HashTag.css";

const HashTag = ({ hashTags, sendHashTag}) => {

  const theme = useContext(ThemeContext);
  const handleHashTagClick = (event) => {
    const tag = event.target.innerHTML;
    sendHashTag(tag);
  }
  return (
    <div
      className="hashTag-container"
      style={{ background: theme.foreground, color: theme.font }}
    >
      <h2
        className="hashTag-header"
        style={{ color: theme.font, borderColor: theme.background }}
      >
        HashTags
      </h2>
      <ul className="hashTags__list">
        {hashTags.map((tag) => (
          <li className="hashTags__list__item">
            <Link
              style={{ color: "red" }}
              className="hashTags__list__text"
              // to="/"
              onClick={handleHashTagClick}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HashTag;

import React, { useContext } from "react";

import { ThemeContext } from "../components/ThemeContext.jsx";
import "./HashTag.css";

const HashTag = ({ hashTags }) => {
  const theme = useContext(ThemeContext);
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
          <li className="hashTags__list__item" style={{ color: "red", fontWeight: "600" }}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default HashTag;

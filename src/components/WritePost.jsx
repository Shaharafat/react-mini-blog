import React, { useState, useContext } from "react";
import { ThemeContext, themes } from "./ThemeContext.jsx";

import "./WritePost.css";
import profilePic from "../images/pp.jpg";

const WritePost = ({ getNewPost }) => {
  const [characterCount, updateCharacterCount] = useState(140);
  const [postContent, setPostContent] = useState("");
  const theme = useContext(ThemeContext);
  const handleChange = (event) => {
    updateCharacterCount(140 - event.target.value.length);
    setPostContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getNewPost(postContent);
    setPostContent("");
    updateCharacterCount(Number(140));
  };
  return (
    <div
      className="writePost-container"
      style={{ background: theme.foreground }}
    >
      <img
        src={profilePic}
        alt="user image."
        className="writePost__userImage"
        style={{borderColor:theme.border}}
      />
      <span className="writePost__userName" style={{ color: theme.font }}>
        Shah Arafat
      </span>
      <form className="writePost__form" onSubmit={handleSubmit}>
        <textarea
          className="writePost__textBox"
          rows="5"
          placeholder="write post...."
          value={postContent}
          onChange={handleChange}
          style={{ background: theme.background, borderColor: theme.background,color:theme.font }}
        ></textarea>
        <span
          className={`writePost__wordCount`}
          style={{ color: characterCount < 0 ? theme.fontRed : theme.font}}
        >
          {`${characterCount} character${
            !(characterCount === 0) &&
            !(characterCount === 1) &&
            !(characterCount === -1)
              ? "'s"
              : ""
          } ${characterCount < 0 ? "exceeded" : "left"}`}{" "}
        </span>
        <button
          className="writePost__submit"
          disabled={characterCount === 140 || characterCount < 0 ? true : false}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default WritePost;

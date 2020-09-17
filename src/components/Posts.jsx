import React, { useContext, useEffect } from "react";
import ReactDOM from 'react-dom';
import { handleHashTag } from "../helper.js";
import { ThemeContext, themes } from './ThemeContext.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import userPic from "../images/pp.jpg";

import "./Posts.css";

const Posts = ({
  id,
  name,
  date,
  postText,
  loved,
  bookmarked,
  setBookmark,
  setLoved,
  lovedAnimation,
  bookmarkAnimation,
}) => {
  const theme = useContext(ThemeContext)
  const handleLoveReaction = (event) => {
    console.log("handling love...");
    setLoved(id);
  };

  const handleBookmark = (event) => {
    console.log("handling bookmark...");
    setBookmark(id);
  };

  return (
    <div className="post" style={{background:theme.foreground}}>
      <div className="post__userInfo">
        <img src={userPic} className="post__userImage" alt="image..." />
        <div className="post__userData" style={{color:theme.font}}>
          <span className="post__userName">{name}</span>
          <span className="post__date">{date}</span>
        </div>
      </div>
      <div className="post__content" style={{ color: theme.font, borderColor: theme.background }}>{handleHashTag(postText)}</div>
      <div className="post__reaction">
        <span
          className={`post__reaction__icon ${
            loved ? "red" : ""
          } ${lovedAnimation}`}
          onClick={handleLoveReaction}
        >
          <FontAwesomeIcon style={{ pointerEvents: "none" }} icon={faHeart} />
        </span>
        
      </div>
    </div>
  );
};

export default Posts;

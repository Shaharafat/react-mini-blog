import React, { useEffect } from "react";
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
  const handleLoveReaction = (event) => {
    console.log("handling love...");
    setLoved(id);
  };

  const handleBookmark = (event) => {
    console.log("handling bookmark...");
    setBookmark(id);
  };

  return (
    <div className="post fr-light">
      <div className="post__userInfo">
        <img src={userPic} className="post__userImage" alt="image..." />
        <div className="post__userData">
          <span className="post__userName">{name}</span>
          <span className="post__date">{date}</span>
        </div>
      </div>
      <div className="post__content">{postText}</div>
      <div className="post__reaction">
        <span
          className={`post__reaction__icon ${
            loved ? "red" : ""
          } ${lovedAnimation}`}
          onClick={handleLoveReaction}
        >
          <FontAwesomeIcon style={{ pointerEvents: "none" }} icon={faHeart} />
        </span>
        <span
          className={`post__reaction__icon ${
            bookmarked ? "black" : ""
          } ${bookmarkAnimation}`}
          onClick={handleBookmark}
        >
          <FontAwesomeIcon
            style={{ pointerEvents: "none" }}
            icon={faBookmark}
          />
        </span>
      </div>
    </div>
  );
};

export default Posts;

import React, { useState } from "react";
import "./WritePost.css";
import profilePic from "../images/pp.jpg";

const WritePost = () => {
  const [characterCount, updateCharacterCount] = useState(140);
  const handleChange = (event) => {
    updateCharacterCount(140 - event.target.value.length);
  };

  const handleSubmit = () => {
    console.log("...");
  };
  return (
    <div className="writePost-container fr-light">
      <img
        src={profilePic}
        alt="user image."
        className="writePost__userImage"
      />
      <span className="writePost__userName">Shah Arafat</span>
      <form className="writePost__form" onSubmit={handleSubmit}>
        <textarea
          className="writePost__textBox"
          rows="5"
          placeholder="write post...."
          onChange={handleChange}
        ></textarea>
        <span
          className={`writePost__wordCount ${characterCount < 0 ? "red" : ""} `}
        >
          {`${characterCount} character${
            !(characterCount === 0) &&
            !(characterCount === 1) &&
            !(characterCount === -1)
              ? "'s"
              : ""
          } ${characterCount < 0 ? "exceeded" : "left"}`}{" "}
        </span>
        <button className="writePost__submit" disabled={characterCount === 140 || characterCount < 0 ? true : false} >Post</button>
      </form>
    </div>
  );
};

export default WritePost;

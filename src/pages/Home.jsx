import React, { useEffect, useState, useContext } from "react";

import ReactDOM from "react-dom";
import { ThemeContext, themes } from "../components/ThemeContext.jsx";

import Navbar from "../components/Navbar.jsx";
import WritePost from "../components/WritePost.jsx";
import Posts from "../components/Posts.jsx";
import HashTag from "../components/HashTag.jsx";

import { findHash, handleHashTag } from "../helper.js";

import postsData from "../data.js";

import "./Home.css";

const Home = ({ hamburgerStatus, hamburgerToggle, changeTheme }) => {
  const [allPosts, updatePosts] = useState(postsData);
  const [hashTags, updateHashTagList] = useState(findHash(allPosts));

  const theme = useContext(ThemeContext);

  useEffect(() => {
    updateHashTagList(findHash(allPosts));
  }, [allPosts]);
  
  const setLoved = (id) => {
    console.log("loved...");
    updatePosts(
      allPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              loved: !post.loved,
              lovedAnimation: !post.loved ? "animation" : "",
            }
          : post
      )
    );
  };

  const getNewPost = (postData) => {
    updatePosts([
      {
        id: allPosts.length + 1,
        name: "Shah Arafat",
        date: `${new Date()
          .getDate()
          .toString()
          .padStart(2, "0")}-${new Date()
          .getMonth()
          .toString()
          .padStart(2, "0")}-${new Date().getFullYear()}`,
        postText: postData,
        loved: false,
        bookmarked: false,
      },
      ...allPosts,
    ]);
  };

  return (
    <div className="container" style={{ background: theme.background }}>
      <Navbar
        hamburgerStatus={hamburgerStatus}
        hamburgerToggle={hamburgerToggle}
        changeTheme={changeTheme}
      />
      <div className="main-content">
        <div className="write-post">
          <WritePost getNewPost={getNewPost} />
        </div>
        <div className="posts">
          {allPosts.map((post) => (
            <Posts
              {...post}
              setLoved={setLoved}
              lovedAnimation={post.lovedAnimation}
              bookmarkAnimation={post.bookmarkAnimation}
            />
          ))}
        </div>
        <div className="hash">
          <HashTag hashTags={hashTags} />
        </div>
      </div>
    </div>
  );
};

export default Home;

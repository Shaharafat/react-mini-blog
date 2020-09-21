import React, { useEffect, useState, useContext } from "react";

import { ThemeContext, themes } from "../components/ThemeContext.jsx";

import "./home.css";
import Navbar from "../components/Navbar.jsx";
import WritePost from "../components/WritePost.jsx";
import Posts from "../components/Posts.jsx";
import HashTag from "../components/HashTag.jsx";
import HashTagPosts from "../pages/HashTagPosts.jsx";
import Footer from "../components/Footer.jsx";

import { findHash } from "../helper.js";

import postsData from "../data.js";

const Home = ({ hamburgerStatus, hamburgerToggle, changeTheme }) => {
  const [allPosts, updatePosts] = useState(postsData);
  const [hashTags, updateHashTagList] = useState(findHash(allPosts));
  const [showHashTagsPosts, togglePostStatus] = useState(false);
  const [selectedTag, changeSelectedTag] = useState("");

  const theme = useContext(ThemeContext);

  useEffect(() => {
    updateHashTagList(findHash(allPosts));
  }, [allPosts]);

  const getHashTag = (tag) => {
    togglePostStatus(true);
    changeSelectedTag(tag);
    // changeHashPostLists(generateHashPosts(tag, allPosts));
    // console.log(hashPostList);
  };

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
        showHashTagsPost={togglePostStatus}
      />
      <div className="main-content">
        <div className="write-post">
          <WritePost getNewPost={getNewPost} />
        </div>
        <div className="posts">
          {showHashTagsPosts ? (
            <HashTagPosts
              setLoved={setLoved}
              tag={selectedTag}
              allPosts={allPosts}
              sendHashTag={getHashTag}
            />
          ) : (
            allPosts.map((post) => (
              <Posts
                {...post}
                setLoved={setLoved}
                lovedAnimation={post.lovedAnimation}
                bookmarkAnimation={post.bookmarkAnimation}
                sendHashTag={getHashTag}
              />
            ))
          )}
        </div>
        <div className="hash">
          <HashTag hashTags={hashTags} sendHashTag={getHashTag} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;

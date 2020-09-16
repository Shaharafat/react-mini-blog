import React, { useEffect, useState,useContext } from "react";
import { ThemeContext, themes } from '../components/ThemeContext.jsx';


import Navbar from "../components/Navbar.jsx";
import WritePost from "../components/WritePost.jsx";
import Posts from "../components/Posts.jsx";
import HashTag from "../components/HashTag.jsx";
import postsData from "../data.js";
// import BookmarkList from "../components/BookmarkList.jsx";

import "./home.css";

const Home = ({ hamburgerStatus, hamburgerToggle,changeTheme }) => {
  const [allPosts, updatePosts] = useState(postsData);
  const theme = useContext(ThemeContext);
  // ❌ bookmarks section is not needed for this project. so, removed.
  // const [bookmarks, updateBookmarks] = useState(
  //   allPosts.filter((post) => post.bookmarked)
  // );

  // const setBookmark = (id) => {
  //   updatePosts(
  //     allPosts.map((post) =>
  //       post.id === id
  //         ? {
  //             ...post,
  //             bookmarked: !post.bookmarked,
  //             bookmarkAnimation: !post.bookmarked ? "animation" : "",
  //           }
  //         : post
  //     )
  //   );

  //   allPosts.forEach((post) => {
  //     if (post.id === id) {
  //       if (!post.bookmarked) {
  //         updateBookmarks([post, ...bookmarks]);
  //       } else {
  //         updateBookmarks(
  //           bookmarks.filter((bookmark) => bookmark.id !== post.id)
  //         );
  //       }
  //     }
  //   });
  // };
  // ❌ =========================

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
    <div className="container" style={{background:theme.background}}>
      <Navbar
        hamburgerStatus={hamburgerStatus}
        hamburgerToggle={hamburgerToggle}
        changeTheme={changeTheme}
      />
      <div className="main-content">
        <div className="write-post" >
          <WritePost getNewPost={getNewPost} />
        </div>
        <div className="posts">
          {allPosts.map((post) => (
            <Posts
              {...post}
              // setBookmark={setBookmark}
              setLoved={setLoved}
              lovedAnimation={post.lovedAnimation}
              bookmarkAnimation={post.bookmarkAnimation}
            />
          ))}
        </div>
        <div className="hash">
          <HashTag/>
        </div>
      </div>
    </div>
  );
};

export default Home;

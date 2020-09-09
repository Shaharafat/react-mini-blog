import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";
import WritePost from "../components/WritePost.jsx";
import Posts from "../components/Posts.jsx";
import postsData from "../data.js";
import BookmarkList from "../components/BookmarkList.jsx";

const Home = ({ hamburgerStatus, hamburgerToggle }) => {
  const [allPosts, updatePosts] = useState(postsData);
  const [bookmarks, updateBookmarks] = useState(
    allPosts.filter((post) => post.bookmarked)
  );

  const setBookmark = (id) => {
    console.log(bookmarks);
    updatePosts(
      allPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              bookmarked: !post.bookmarked,
              bookmarkAnimation: !post.bookmarked ? "animation" : "",
            }
          : post
      )
    );
    // updateBookmarks(
    //   allPosts.map(post => )
    // )
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

  return (
    <div className="container bg-light">
      <Navbar
        hamburgerStatus={hamburgerStatus}
        hamburgerToggle={hamburgerToggle}
      />
      <div>
        <WritePost />
        {allPosts.map((post) => (
          <Posts
            {...post}
            setBookmark={setBookmark}
            setLoved={setLoved}
            lovedAnimation={post.lovedAnimation}
            bookmarkAnimation={post.bookmarkAnimation}
          />
        ))}
      </div>
      {bookmarks.map((bookmark) => (
        <BookmarkList {...bookmark} />
      ))}
    </div>
  );
};

export default Home;

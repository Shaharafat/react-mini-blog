import React,{useContext} from "react";
import { ThemeContext } from "../components/ThemeContext.jsx";
import Posts from "../components/Posts.jsx";

import './HashTagPosts.css';

const HashTagPosts = ({ tag, setLoved, allPosts,sendHashTag }) => {
  const theme = useContext(ThemeContext);

  const generateHashPosts = (hashTag, allPost) => {
    console.log(hashTag, allPost);
    return allPost.map((post) => {
      if (post.postText.includes(hashTag)) {
        return (
          <Posts
            {...post}
            setLoved={setLoved}
            lovedAnimation={post.lovedAnimation}
            bookmarkAnimation={post.bookmarkAnimation}
            // problem here...
            sendHashTag
          />
        );
      }
    });
  };

  return (
    <>
      <h1 className="hashTag__Title" style={{ background:theme.foreground, color:theme.font, marginTop: "1rem" }}>
        HashTag - {tag}
      </h1>
      {generateHashPosts(tag, allPosts)}
    </>
  );
};

export default HashTagPosts;

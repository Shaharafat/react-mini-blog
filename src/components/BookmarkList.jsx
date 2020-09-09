import React from "react";

const BookmarkList = ({ id, name, postText }) => {
  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{postText}</div>
      <hr/>
    </div>
  );
};

export default BookmarkList;

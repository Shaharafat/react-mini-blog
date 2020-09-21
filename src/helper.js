import React from "react";

// export const handleHashTag = (post) => {
//   const organizedData = post.split(" ").map((data) => {
//     if (data.match(/^#\w+/)) {
//       return (
//         <span>
//           <a
//             className="post__hashTag"
//             style={{ color: "red", fontWeight: "600" }}
            
//           >
//             {data}{" "}
//           </a>
//         </span>
//       );
//     }

//     return data + " ";
//   });

//   return organizedData;
// };

export const findHash = (allPosts) => {
  let hashSet = new Set();
  let data = allPosts.map((post) => post.postText.split(" "));
  data = data.map((singleWord) =>
    singleWord.find((element) => element.match(/^#\w+/))
  );
  data = data.forEach((singleTag) => hashSet.add(singleTag));
  // data = data.map(singlePost => singlePost.filter(singleWord => singleWord.match(/^#\w+/)));
  // data = data.forEach(singleData => singleData);
  // console.log(Array.from(hashSet));
  return Array.from(hashSet);
};

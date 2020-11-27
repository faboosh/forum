import React, { useState } from "react";
import { PostContext } from "../PostContext";

export default function PostProvider({ children }) {
  const [postList, setPostList] = useState(null);
  const [categoryList, setCategoryList] = useState(false);

  return (
    <PostContext.Provider
      value={{
        postList,
        setPostList,
        categoryList,
        setCategoryList,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}



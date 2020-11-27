import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../contexts/PostContext";
import PostKit from "../../data/PostKit";

export default function GetPosts({ children }) {
  const { setCategoryList, setPostList, postList, categoryList } = useContext(
    PostContext
  );

  const [canRender, setCanRender] = useState(false);

  function getCategoryList() {
    PostKit.categoryList()
      .then((res) => res.json())
      .then((data) => {
        setCategoryList(data.results);
      });
  }

  function getPostList() {
    PostKit.postList()
      .then((res) => res.json())
      .then((data) => {
        setPostList(data);
      });
  }

  useEffect(() => {
    if(!canRender)
      getCategoryList();
  }, []);

  useEffect(() => {
    if(!canRender)
      getPostList();
  }, []);

  useEffect(() => {
    setCanRender(categoryList && postList && typeof postList.results == "object")

    if(!postList)
      getPostList();

    if(!categoryList)
      getCategoryList();
  }, [postList, categoryList])

  return (
    <>{canRender && children}</>
  );
}

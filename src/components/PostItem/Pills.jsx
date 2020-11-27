import React, { useContext } from "react";
import { Div } from "../../styles/StyledElements";
import { PostContext } from "../../contexts/PostContext";
import IconPill from "../IconPill";

export default function PostItem({
  countResponses,
  category,
  isClosed,
  viewCount,
  isPinned,
  userSubscribed,
}) {
  const { categoryList } = useContext(PostContext);

  const categoryName = category
    ? categoryList[categoryList.findIndex((catObj) => (catObj.id = category))]
        .title
    : null;

  return (
    <>
      <Div
        flex
        justify="flex-start"
        background="dark1"
        align="center"
        padding="xs 95px"
      >
        {countResponses && (
          <IconPill
            margin="0 s 0 0"
            icon=""
            iconSize="2.2em"
            vComp="0"
            color="blue"
            innerText={countResponses + " comments"}
          />
        )}
        {viewCount && (
          <IconPill
            margin="0 s 0 0"
            icon=""
            iconSize="2.7em"
            vComp="0"
            color="aqua"
            innerText={viewCount + " Views"}
          />
        )}
        {categoryName && (
          <IconPill
            margin="0 s 0 0"
            icon="ﱮ"
            iconSize="2.2em"
            vComp="0"
            color="yellow"
            vOffset="-1"
            innerText={categoryName}
          />
        )}
        {isPinned && (
          <IconPill
            margin="0 s 0 0"
            icon=""
            iconSize="2.2em"
            vComp="0"
            color="orange"
            innerText="Pinned"
          />
        )}
        {userSubscribed && (
          <IconPill
            margin="0 s 0 0"
            icon=""
            iconSize="2.2em"
            color="orange"
            innerText="Subscribed"
          />
        )}
        {isClosed && (
          <IconPill
            margin="0 s 0 0"
            icon="ﰸ"
            iconSize="2.2em"
            vComp="0"
            color="purple"
            innerText={"Thread locked"}
          />
        )}
      </Div>
    </>
  );
}

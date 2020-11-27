import React from "react";
import { useHistory } from "react-router-dom";
import PostList from "../components/PostList";
import { Div, SatisfyingButton } from "../styles/StyledElements";
import GetPosts from "../components/getters/GetPosts";

export default function PostListPage() {
  const history = useHistory();
  return (
    <GetPosts>
      <SatisfyingButton
        width="100%"
        color="aqua"
        onClick={() => {
          history.push("/create-post");
        }}
      >
        CREATE POST
      </SatisfyingButton>
      <Div padding="m 0 0 0">
        <PostList />
      </Div>
    </GetPosts>
  );
}

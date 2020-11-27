import React, { useState, useEffect } from "react";
import PostKit from "../data/PostKit";
import PostItem from "../components/PostItem/PostItem";
import PostReply from "../components/PostReply";
import { Div, H3, SatisfyingButton } from "../styles/StyledElements";
import styled from "styled-components";
import PostReplyForm from "../components/PostReplyForm";

const ReplyListWrapper = styled(Div)`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;

  & > div {
    min-width: 300px;
  }
`;

const PostReplyWrapper = styled(Div)`
  width: 100%;
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.colors.dark1};
`;

export default function PostDetailPage({ match }) {
  const { id } = match.params;
  const [post, setPost] = useState(null);
  const [replyOpen, setReplyOpen] = useState(false);

  useEffect(() => {
    getPost();
  }, []);

  function getPost() {
    PostKit.postDetail(id)
    .then((res) => res.json())
    .then((data) => {
      setPost(data);
      console.log(data);
    });
  }

  return (
    <>
      {post && (
        <Div margin="0" background="dark0_soft">
          <PostItem {...post} expanded />
          {!replyOpen && (
            <PostReplyWrapper
              flex
              justify="space-between"
              align="center"
              padding="m"
            >
              <H3 fontSize="1.3em" margin="0">
                Replies
              </H3>
              <SatisfyingButton padding="s xxl" color="aqua" onClick={() => setReplyOpen(true)}>
                REPLY
              </SatisfyingButton>
            </PostReplyWrapper>
          )}

          {replyOpen && <PostReplyForm onSubmit={() => {
            setReplyOpen(false);
            getPost();
          }} close={() => setReplyOpen(false)} id={id}  />}

          <ReplyListWrapper padding="0" maxHeight="70vh" overflow="auto">
            {post.responses.map((response, i) => {
              return <PostReply {...response} key={i} />;
            })}
          </ReplyListWrapper>
        </Div>
      )}
    </>
  );
}

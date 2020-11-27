import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Div, H3, SatisfyingButton } from "../styles/StyledElements";
import FormRenderer from "./FormRenderer";
import PostKit from '../data/PostKit';

const PostReplyFormWrapper = styled(Div)`
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
`;

export default function PostReplyForm({ open, setOpen, close, onSubmit, id, ...rest }) {
  const [formData, setFormData] = useState({});

  function postReply() {
    PostKit.createPostReply({
      ...formData,
      parent: id
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      onSubmit();
    })
  }

  function closeForm() {
    close();
  }

  return (
    <PostReplyFormWrapper
      {...rest}
      background="dark1"
      padding="m"
      borderRadius="borderRadius"
    >
      <FormRenderer form="reply" onChange={setFormData} />
      <Div flex>
        <SatisfyingButton
          color="orange"
          width="50%"
          margin="0 m 0 0"
          onClick={closeForm}
        >
          CANCEL
        </SatisfyingButton>
        <SatisfyingButton color="aqua" width="50%" onClick={postReply}>
          POST
        </SatisfyingButton>
      </Div>
    </PostReplyFormWrapper>
  );
}

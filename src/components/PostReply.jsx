import React from "react";
import { Div, H5, P, Span } from "../styles/StyledElements";
import ProfilePicPlaceholder from "./ProfilePicPlaceholder";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { formatDate } from "../util/date";

const StyledPostReply = styled(Div)`
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.dark1};

  & p,
  & h5 {
    margin: 0;
  }
`;

export default function PostReply({ content, author, id, title, createdAt }) {
  console.log(content, author);
  return (
    <StyledPostReply
      flex
      padding="s"
      width="auto"
      margin="0 0 0 0"
      background="dark0_soft"
    >
      <ProfilePicPlaceholder
        firstName={author ? author.firstName.toUpperCase() : ""}
        lastName={author ? author.lastName.toUpperCase() : ""}
        size="40px"
        fontSize="20px"
      />
      <Div>
        <H5 margin="0 0 s 0" fontSize="1em">
            {`${title} `}
          <Span fontWeight="400" fontSize="0.8em">
            {author ? author.firstName : ""} {author ? author.lastName : ""}
            {"@"}
            {formatDate(createdAt)}
          </Span>
        </H5>
        <Div>
          <ReactMarkdown source={content} allowDangerousHtml></ReactMarkdown>
        </Div>
      </Div>
    </StyledPostReply>
  );
}

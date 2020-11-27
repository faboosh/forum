import React from "react";
import { useHistory } from "react-router-dom";
import { Div, H3, P, Span } from "../../styles/StyledElements";
import ProfilePicPlaceholder from "../ProfilePicPlaceholder";
import ReactMarkdown from "react-markdown";
import styled, { css } from "styled-components";
import Pills from "./Pills";
import { formatDate } from '../../util/date';

const PostWrapper = styled(Div)`
  position: relative;

  & img {
    width: 100%;
  }

  &:before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    background: ${({ theme }) => theme.colors.dark3};
    z-index: -1;
    border-radius: ${({ theme }) => theme.borderRadius};
    opacity: 0;
    transition: 0.2s opacity;
  }

  &:hover:before {
    opacity: 1;
  }

  ${({ expanded }) => {
    if (typeof expanded !== "undefined") {
      return css`
        &:hover:before {
          opacity: 0;
        }
      `;
    } else {
      return css`
        cursor: pointer;
      `;
    }
  }}
`;

export default function PostItem({
  title,
  author,
  content,
  countResponses,
  id,
  category,
  isClosed,
  createdAt,
  updatedAt,
  viewCount,
  isPinned,
  expanded,
  userSubscribed,
  pills,
}) {
  const MAX_TITLE_LEN = 80;
  const history = useHistory();

  function goToDetailPage() {
    history.push(`/posts/${id}`);
  }

  const postStatus = {
    countResponses,
    category,
    isClosed,
    viewCount,
    isPinned,
    userSubscribed
  }

  return (
    <>
      <PostWrapper
        flex
        justify="space-between"
        direction="column"
        background="dark0_soft"
        {...expanded ? {
          margin: "0"
        } : {
          margin: "0 0 m 0"
        }}
        borderRadius="borderRadius"
        onClick={goToDetailPage}
        expanded={expanded}
      >
        <Div flex align="flex-start" margin="0" padding="m">
          <ProfilePicPlaceholder
            firstName={author ? author.firstName.toUpperCase() : ""}
            lastName={author ? author.lastName.toUpperCase() : ""}
            size="60px"
            fontSize="30px"
          />

          <Div flex direction="column" width="100%" overflow="auto">
            {title && (
              <H3 margin="xs 0 0 0">
                {title.substring(0, MAX_TITLE_LEN)}
                {title.length > MAX_TITLE_LEN && "..."}
                <Span fontWeight="400" fontSize="0.8em">
                  {` #${id} `}
                </Span>
              </H3>
            )}
            <Span margin="0 0 xs 0">
              {"Posted by "}
              {author ? author.firstName : ""} {author ? author.lastName : ""}
              {" on "}
              {formatDate(createdAt)}
              {", last updated "}
              {formatDate(updatedAt)}
            </Span>
            {content && (
              <Div
                background="dark0"
                padding="s"
                borderRadius="borderRadius"
                {...(!expanded && {
                  maxHeight: "600px",
                })}
                overflow="auto"
              >
                <P margin="-15px 0" fontSize="1.1em" max-width="100%">
                  <ReactMarkdown source={content} allowDangerousHtml />
                </P>
              </Div>
            )}
          </Div>
        </Div>
        {pills && (
          <Pills {...postStatus} />
        )}
      </PostWrapper>
    </>
  );
}

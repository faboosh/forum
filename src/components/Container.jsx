import React from "react";
import styled from "styled-components/macro";

const StyledContainer = styled.div`
  max-width: ${({ width }) => (width ? width : "800px")};
  margin: 0 auto;
  padding-top: 80px;

  @media (max-width: 980px) {
    padding-left: ${({ theme }) => theme.padding.m};
    padding-right: ${({ theme }) => theme.padding.m};
    padding-bottom: ${({ theme }) => theme.padding.m};
  }
`;

export default function Container({ children, width }) {
  return <StyledContainer width={width}>{children}</StyledContainer>;
}

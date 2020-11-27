import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Div, H3, SatisfyingButton, Span } from "../styles/StyledElements";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import { PostContext } from "../contexts/PostContext";
import UserKit from "../data/UserKit";

const NavBarContainer = styled(Div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  z-index: 10000000;

  & a {
    font-size: 1.2em;
    text-decoration: none;
    padding: 0;
    margin-right: 15px;
  }
`;

export default function Navbar() {
  const { isAuth, setIsAuth, setUser } = useContext(UserContext);
  const { setCategoryList, setPostList } = useContext(PostContext);
  console.log("Auth: ", isAuth);
  const history = useHistory();

  function logout() {
    setIsAuth(false);
    setUser(null);
    setCategoryList(null);
    setPostList(null);
    UserKit.setToken("");
    history.push("/");
  }

  return (
    <NavBarContainer
      flex
      background="dark0_soft"
      align="center"
      justify="space-between"
      padding="s"
    >
      <Div flex align="center">
        <H3>UPDOOT</H3>
      </Div>
      {isAuth && (
        <Div>
          <Link to="/home">
            {" "}
            <Span>Home</Span>{" "}
          </Link>
          <Link to="/posts">
            <Span>Posts</Span>
          </Link>
          <SatisfyingButton
            padding="xs xxl"
            margin="0 0 0 s"
            color="orange"
            onClick={logout}
          >
            LOGOUT
          </SatisfyingButton>
        </Div>
      )}
    </NavBarContainer>
  );
}

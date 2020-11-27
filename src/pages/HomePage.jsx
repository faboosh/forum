import React from "react";
import { useHistory } from "react-router-dom";
import { SatisfyingButton, Div, H1 } from "../styles/StyledElements";
import CyclingText from "../components/CyclingText";
import UserData from "../components/UserData";
import RequireUserContext from "../contexts/context-checkers/RequireUserContext";
import UserKit from '../data/UserKit';

export default function HomePage() {
  const history = useHistory();

  function onGotoForum() {
    history.push('/posts');
  }

  return (
    <RequireUserContext>
      <Div margin="20vh auto 0 auto" maxWidth="600px">
        <H1 margin="0 0 s 0" padding="0" minHeight="3.2em">
          WELCOME TO THE
          <br />
          <CyclingText fontSize="1.4em" />
        </H1>

        <UserData />

        <SatisfyingButton color="aqua" width="100%" onClick={onGotoForum} margin="0 0 m 0">
          GO TO FORUM
        </SatisfyingButton>
      </Div>
    </RequireUserContext>
  );
}

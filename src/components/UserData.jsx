import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Div, H3, P, Span } from "../styles/StyledElements";
import ProfilePicPlaceholder from "./ProfilePicPlaceholder";

export default function UserData() {
  const { user, countries } = useContext(UserContext);
  const { email, firstName, lastName, country } = user;

  const countryName =
    countries[
      countries.findIndex((countryObj) => {
        return countryObj.id == country;
      })
    ].title;
    
  return (
    <Div
      flex
      padding="m"
      margin="0 0 m 0"
      background="dark0_soft"
      borderRadius="borderRadius"
    >
      <ProfilePicPlaceholder 
        firstName={firstName}
        lastName={lastName}
      />
      <Div flex direction="column" justify="center">
        <H3 fontSize="2em" margin="0">{`${firstName} ${lastName}`}</H3>
        <P margin="0 0 m 0">{`${email} ${countryName}`}</P>
      </Div>
    </Div>
  );
}

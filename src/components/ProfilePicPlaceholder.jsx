import React from "react";
import { Div, H3, P, Span } from "../styles/StyledElements";

export default function ProfilePicPlaceholder({firstName, lastName, size, fontSize, ...rest}) {
  return (
    <Div
      width={ size || "7em" }
      height={ size || "7em" }
      background="gray_245"
      borderRadius="100%"
      minWidth={ size || "7em" }
      maxWidth={ size || "7em" }
      margin="0 m 0 0"
      flex
      justify="center"
      align="center"
      {...rest}
    >
      <Span fontSize={ fontSize || "3.5em" }>{`${firstName[0] || ""}${lastName[0] || ""}`}</Span>
    </Div>
  );
}

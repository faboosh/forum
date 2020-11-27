import React from "react";
import { Div, H3, P, Icon, Span } from "../styles/StyledElements";
export default function IconPill({
  icon,
  innerText,
  iconSize,
  vComp,
  vOffset,
  color,
  ...rest
}) {
  return (
    <Div
      flex
      align="center"
      justify="center"
      padding="0 s 0 0"
      background={`faded_${color}`}
      borderRadius="borderRadius"
      overflow="hidden"
      maxHeight="30px"
      {...rest}
    >
      <Icon
        fontSize={iconSize}
        margin={`-${vComp ? vComp : 0}px 5px -${vComp ? vComp : 0}px 7px`}
        color={`bright_${color}`}
        {...vOffset &&{
          transform: `translateY(${vOffset}px)`
        }}
      >
        {icon}
      </Icon>
      <Span fontWeight="500" fontFamily="special" color={`bright_${color}`}>
        {innerText}
      </Span>
    </Div>
  );
}

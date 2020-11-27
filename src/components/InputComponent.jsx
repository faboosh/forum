import React from "react";
import { Input, Div, Textarea } from "../styles/StyledElements";
import styled from "styled-components";
import SelectMenu from "./SelectMenu";

const padding = "0px";

const InputWrapper = styled(Div)`
  position: relative;
  background: ${({ theme }) => theme.colors.dark0_soft};
  transition: 0.35s color ease-in-out;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:after {
    content: "";
    position: absolute;
    top: ${padding};
    right: ${padding};
    left: ${padding};
    bottom: ${padding};
    background: ${({ theme }) => theme.colors.dark2};
    border-radius: ${({ theme }) => theme.borderRadius};
    transform: scaleX(0);
    transform-origin: center left;
    transition: 0.35s transform cubic-bezier(0.85, 0.01, 0.33, 0.92);
  }

  &:focus-within:after {
    transform: scaleX(1);
  }

  & input {
    &::placeholder {
      transition: 0.35s color;
    }

    &:focus::placeholder {
      color: ${({ theme }) => theme.colors.dark0_hard};
    }
  }
`;

export default function InputComponent({
  children,
  placeholder,
  onChange,
  name,
  type,
  required,
  options,
  value,
  ...rest
}) {
  if (type == "select") {
    return (
      <SelectMenu
        {...{
          placeholder,
          onChange,
          name,
          options,
        }}
        {...rest}
      />
    );
  } else if (type == "textarea") {
    return (
      <InputWrapper {...rest}>
        <Textarea
          {...{
            placeholder,
            onChange,
            name,
            required,
            value,
          }}
        >
          {children}
        </Textarea>
      </InputWrapper>
    );
  } else {
    return (
      <InputWrapper {...rest}>
        <Input
          {...{
            placeholder,
            onChange,
            name,
            type,
            required,
            value,
          }}
        >
          {children}
        </Input>
      </InputWrapper>
    );
  }
}

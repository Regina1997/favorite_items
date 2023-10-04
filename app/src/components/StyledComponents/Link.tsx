import styled from "styled-components";
import React from "react";

interface LinkProps {
  fontSize: string;
  [key: string]: any;
}

const Link = styled.h1<LinkProps>`
  font-size: ${(props) => {
    if (props.fontSize === "mobile_m") {
      return "20px";
    } else if (props.fontSize === "mobile_s") {
      return "15px";
    } else {
      return "30px";
    }
  }};
  text-align: center;
  color: white;
  width: 100%;
  &:hover {
    color: #ffca42;
  }
`;

export const StyledLink: React.FC<LinkProps> = (props) => {
  return <Link {...props} />;
};

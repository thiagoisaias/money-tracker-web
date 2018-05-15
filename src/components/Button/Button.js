import React from "react";
import styled from "styled-components";

const Container = styled.button`
  font-size: 13px;
  padding: 6px;
  border-radius: 2px;
  color: #fff;
  background-color: #add8e6;
  width: 125px;
  height: 35px;

  &:hover {
    cursor: pointer;
    background-color: #a9cdd8;
  }
`;

const Button = props => {
  return <Container {...props}> {props.children} </Container>;
};

export default Button;

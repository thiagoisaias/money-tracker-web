import React from "react";
import styled from "styled-components";
// import { devices } from "../../../utils/devices";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
  color: #eee;
  font-size: 36px;
  letter-spacing: 2px;
`;

const NotFound = props => {
  return <Container>{"404"}</Container>;
};

export default NotFound;
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2d2d2d;
  color: #f2f2f2;

  @media (max-width: 736px) {
    padding: 0 32px;
  }

  @media (min-width: 737px) {
    padding: 0 55px;
  }
`;

const Logo = styled.div`
  color: #f2f2f2;

  &:hover {
    opacity: 0.7;
  }
`;

const Header = props => {
  return (
    <Container>
      <NavLink to="/">
        <Logo>Wallet's Logo</Logo>
      </NavLink>
    </Container>
  );
};

export default Header;

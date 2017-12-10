import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2d2d2d;
  color: #fff;
  border-bottom: 1px solid #e2e2e2;

  @media (max-width: 736px) {
    padding: 0 32px;
  }

  @media (min-width: 737px) {
    padding: 0 55px;
  }
`;

const Logo = styled.div`
  color: #fff;
`;

const ProfileMenu = styled.div`
  cursor: pointer;
  font-size: 24px;
`;

const Header = (props) => {
  return (
    <Container>
      <NavLink to='/'><Logo>Wallet's Logo</Logo></NavLink>
      <ProfileMenu><i className="fa fa-user" aria-hidden="true"></i></ProfileMenu>
    </Container>
  )
}

export default Header;
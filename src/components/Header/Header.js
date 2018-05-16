import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { devices } from "../../utils/devices";
import { logout } from "../../store/actions/auth/auth";

const Container = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: #f2f2f2;

  @media ${devices.small} {
    padding: 0 16px;
  }

  @media ${devices.mediumUp} {
    padding: 0 32px;
  }
`;

const Logo = styled.div`
  color: #fff;
`;

const Logout = styled.div`
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Header = props => {
  const { history, onLogout } = props;
  return (
    <Container>
      <NavLink to="/">
        <Logo>{"Money Tracker"}</Logo>
      </NavLink>
      <NavLink to="/accounts">{"Accounts"}</NavLink>
      <Logout
        onClick={() => {
          onLogout(history);
        }}
      >
        {"Logout"}
      </Logout>
    </Container>
  );
};

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
  history: PropTypes.object
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: history => {
      dispatch(logout(history));
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Header));

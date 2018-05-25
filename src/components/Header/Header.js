import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { Wrapper, Logo, NavBar, Logout } from "./styled";

const Header = props => {
  const { history, onLogout } = props;
  return (
    <Wrapper>
      <NavLink to="/">
        <Logo>{"Money Tracker"}</Logo>
      </NavLink>
      <NavBar>
        <NavLink to="/accounts">{"Accounts"}</NavLink>
        {"/"}
        <NavLink to="/categories">{"Categories"}</NavLink>
      </NavBar>
      <Logout
        onClick={() => {
          onLogout(history);
        }}
      >
        {"Logout"}
      </Logout>
    </Wrapper>
  );
};

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Header;

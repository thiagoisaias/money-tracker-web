import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Header from "./Header";

import { logout } from "store/actions/auth/auth";

export const Container = props => {
  const { history, logout } = props;

  return <Header history={history} logout={logout} />;
};

const mapDispatchToProps = {
  logout
};

Container.propTypes = {
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(connect(null, mapDispatchToProps)(Container));

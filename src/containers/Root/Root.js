import React, { Component, Fragment } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { checkAuthStorage } from "../../store/actions/auth";

import App from "../../components/App/App";

export class Root extends Component {
  render() {
    let authRedirect = null;
    if (
      !this.props.isAuthenticated &&
      this.props.location.pathname !== "/auth"
    ) {
      authRedirect = <Redirect to="/auth" />;
    }
    return (
      <Fragment>
        {authRedirect}
        <App />
      </Fragment>
    );
  }

  componentDidMount() {
    this.props.checkAuthStorage();
  }
}

Root.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  checkAuthStorage: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuthStorage: () => {
      dispatch(checkAuthStorage());
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));

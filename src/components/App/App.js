import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { checkAuthStorage } from "../../store/actions/auth";

import Home from "../Home/Home";
import SignupPage from "../SignupPage/SignupPage";
import TransactionForm from "../TransactionForm/TransactionForm";

class App extends Component {
  componentDidMount() {
    this.props.checkAuthStorage();
  }

  render() {
    let authRedirect = null;
    if (!this.props.isAuthenticated) {
      authRedirect = <Redirect to="/auth" />;
    }

    return (
      <Fragment>
        {authRedirect}
        <Switch>
          <Route exact path="/auth" component={SignupPage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/transaction" component={TransactionForm} />
          <Route component={SignupPage} />
        </Switch>
      </Fragment>
    );
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

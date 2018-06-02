import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { clearAuthError, login } from "store/actions/auth/auth";
import Form from "./Form";

export class Container extends Component {
  onSubmitData = formData => {
    const { history, isLoading, onLogin } = this.props;

    if (isLoading) {
      return;
    }

    onLogin(formData, history);
  };

  render() {
    const { onLogin, isLoading, error } = this.props;
    return (
      <Form
        error={error}
        isLoading={isLoading}
        onLogin={onLogin}
        onSubmitData={this.onSubmitData}
      />
    );
  }

  componentWillUnmount() {
    const { error, onClearAuthError } = this.props;
    if (error) {
      onClearAuthError();
    }
  }
}

Container.propTypes = {
  error: PropTypes.string,
  onClearAuthError: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  onClearAuthError: () => {
    dispatch(clearAuthError());
  },

  onLogin: (loginData, history) => {
    dispatch(login(loginData, history));
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { signUp, clearAuthError } from "store/actions/auth/auth";
import Form from "./Form";

export class Container extends Component {
  static propTypes = {
    error: PropTypes.string,
    clearAuthError: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
  };

  onSubmitData = formData => {
    const { history, isLoading, signUp } = this.props;

    if (isLoading) {
      return;
    }

    signUp(formData, history);
  };

  render() {
    const { signUp, isLoading, error } = this.props;

    return (
      <Form
        error={error}
        isLoading={isLoading}
        signUp={signUp}
        onSubmitData={this.onSubmitData}
      />
    );
  }

  componentWillUnmount() {
    const { error, clearAuthError } = this.props;

    if (error) {
      clearAuthError();
    }
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error
});

const mapDispatchToProps = {
  signUp,
  clearAuthError
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);

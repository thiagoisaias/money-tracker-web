import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { signup, clearAuthError } from "../../../store/actions/auth/auth";
import SignupForm from "../../../components/Auth/SignupForm/SignupForm";

export class SignupFormContainer extends Component {
  onSubmitData = formData => {
    const { history, isLoading, onSignup } = this.props;

    if (isLoading) {
      return;
    }

    onSignup(formData, history);
  };

  render() {
    const { onSignup, isLoading, error } = this.props;
    return (
      <SignupForm
        error={error}
        isLoading={isLoading}
        onSignup={onSignup}
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

SignupFormContainer.propTypes = {
  error: PropTypes.string,
  onClearAuthError: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignup: (signupData, history) => {
      dispatch(signup(signupData, history));
    },

    onClearAuthError: () => {
      dispatch(clearAuthError());
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer)
);

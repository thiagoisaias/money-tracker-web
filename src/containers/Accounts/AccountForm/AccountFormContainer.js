import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import AccountForm from "../../../components/Accounts/AccountForm/AccountForm";

import { createAccount } from "../../../store/actions/accounts/accounts";

export class AccountFormContainer extends Component {
  submitData = formData => {
    const { userId, onCreateAccount, history } = this.props;

    onCreateAccount(formData, userId, history);
  };

  render() {
    const { error, isLoading } = this.props;
    return (
      <AccountForm
        submitData={this.submitData}
        error={error}
        isLoading={isLoading}
      />
    );
  }
}

AccountFormContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  userId: PropTypes.number.isRequired,
  onCreateAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    userId: state.auth.user.id,
    isLoading: state.accounts.isLoading,
    error: state.accounts.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateAccount: (accountData, userId, history) => {
      dispatch(createAccount(accountData, userId, history));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AccountFormContainer)
);

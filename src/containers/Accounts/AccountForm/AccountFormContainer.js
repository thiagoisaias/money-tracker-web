import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AccountForm from "../../../components/Accounts/AccountForm/AccountForm";

import { createAccount } from "../../../store/actions/accounts/accounts";

export class AccountFormContainer extends Component {
  submitData = formData => {
    const {
      accessToken,
      client,
      expiry,
      tokenType,
      uid,
      userId,
      onCreateAccount
    } = this.props;

    const authHeaders = { accessToken, client, expiry, tokenType, uid };
    onCreateAccount(formData, userId, authHeaders);
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
  error: PropTypes.array,
  userId: PropTypes.number.isRequired,
  onCreateAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    accessToken: state.auth.accessToken,
    client: state.auth.client,
    expiry: state.auth.expiry,
    uid: state.auth.uid,
    userId: state.auth.userId,
    isLoading: state.accounts.isLoading,
    error: state.accounts.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateAccount: (accountData, userId, authHeaders) => {
      dispatch(createAccount(accountData, userId, authHeaders));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AccountFormContainer
);

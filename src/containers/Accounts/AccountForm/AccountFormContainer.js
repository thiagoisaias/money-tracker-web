import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AccountForm from "../../../components/Accounts/AccountForm/AccountForm";

import { createAccount } from "../../../store/actions/accounts/accounts";

export class AccountFormContainer extends Component {
  submitData = formData => {
    const { userId, onCreateAccount } = this.props;
    
    onCreateAccount(formData, userId);
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
    onCreateAccount: (accountData, userId) => {
      dispatch(createAccount(accountData, userId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AccountFormContainer
);

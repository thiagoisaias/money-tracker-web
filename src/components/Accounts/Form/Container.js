import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { accountType } from "types";

import Form from "./Form";

import {
  createAccount,
  updateAccount,
  setAccountToEdit,
  clearAccountsError,
  clearAccountToEdit
} from "store/actions/accounts/accounts";

export class Container extends Component {
  static propTypes = {
    accountToEdit: accountType,
    error: PropTypes.string,
    history: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    clearAccountToEdit: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired,
    updateAccount: PropTypes.func.isRequired,
    setAccountToEdit: PropTypes.func.isRequired
  };

  onSubmitData = formData => {
    const {
      accountToEdit,
      history,
      isLoading,
      match,
      createAccount,
      updateAccount
    } = this.props;

    if (isLoading) {
      return;
    }

    if (match.path === "/accounts/new") {
      createAccount(formData, history);
    } else if (match.path === "/accounts/:id/edit" && accountToEdit) {
      updateAccount(formData, accountToEdit.id, history);
    } else {
      return;
    }
  };

  render() {
    const { accountToEdit, error, isLoading, match } = this.props;
    return (
      <Form
        accountToEdit={accountToEdit}
        onSubmitData={this.onSubmitData}
        error={error}
        isLoading={isLoading}
        match={match}
      />
    );
  }

  componentDidMount() {
    const { accountToEdit, history, match } = this.props;
    if (match.path === "/accounts/:id/edit" && accountToEdit === null) {
      history.push("/accounts");
    }
  }

  componentWillUnmount() {
    const { error, match, clearAccountsError, clearAccountToEdit } = this.props;

    if (match.path === "/accounts/:id/edit") {
      clearAccountToEdit();
    }
    if (error) {
      clearAccountsError();
    }
  }
}

const mapStateToProps = state => ({
  accountToEdit: state.accounts.accountToEdit,
  isLoading: state.accounts.isLoading,
  error: state.accounts.error
});

const mapDispatchToProps = {
  createAccount,
  setAccountToEdit,
  clearAccountsError,
  clearAccountToEdit,
  updateAccount
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);

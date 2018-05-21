import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import AccountForm from "../../../components/Accounts/AccountForm/AccountForm";

import {
  createAccount,
  updateAccount,
  setAccountToEdit,
  clearAccountToEdit
} from "../../../store/actions/accounts/accounts";

export class AccountFormContainer extends Component {
  submitData = formData => {
    const {
      accountToEdit,
      history,
      isLoading,
      match,
      onCreateAccount,
      onUpdateAccount,
      userId
    } = this.props;

    if (isLoading) {
      return;
    }

    if (match.path === "/accounts/new") {
      onCreateAccount(formData, userId, history);
    } else if (match.path === "/accounts/:id/edit" && accountToEdit) {
      onUpdateAccount(formData, accountToEdit.id, history);
    } else {
      return;
    }
  };

  render() {
    const { accountToEdit, error, isLoading, match } = this.props;
    return (
      <AccountForm
        {...accountToEdit}
        submitData={this.submitData}
        error={error}
        isLoading={isLoading}
        match={match}
      />
    );
  }

  /* When the page is reloaded and the path is /account/:id/edit, accountToEdit is null, so the
  app redirects the user back to /accounts
  */
  componentDidMount() {
    const { accountToEdit, history, match } = this.props;
    if (match.path === "/accounts/:id/edit" && accountToEdit === null) {
      history.push("/accounts");
    }
  }

  // The value of accountToEdit should be null when the user leave /accounts/:id/edit
  componentWillUnmount() {
    this.props.onClearAccountToEdit();
  }
}

AccountFormContainer.propTypes = {
  accountToEdit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    initialBalance: PropTypes.string.isRequired
  }),
  error: PropTypes.string,
  history: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  onClearAccountToEdit: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  onUpdateAccount: PropTypes.func.isRequired,
  onSetAccountToEdit: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    accountToEdit: state.accounts.accountToEdit,
    userId: state.auth.user.id,
    isLoading: state.accounts.isLoading,
    error: state.accounts.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateAccount: (accountData, userId, history) => {
      dispatch(createAccount(accountData, userId, history));
    },

    onSetAccountToEdit: account => {
      dispatch(setAccountToEdit(account));
    },

    onClearAccountToEdit: () => {
      dispatch(clearAccountToEdit());
    },

    onUpdateAccount: (accountData, accountId, history) => {
      dispatch(updateAccount(accountData, accountId, history));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AccountFormContainer)
);

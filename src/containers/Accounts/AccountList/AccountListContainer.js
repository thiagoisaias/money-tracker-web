import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AccountList from "../../../components/Accounts/AccountList/AccountList";

import {
  fetchAccounts,
  deleteAccount
} from "../../../store/actions/accounts/accounts";

export class AccountListContainer extends Component {
  componentDidMount() {
    const { userId, onFetchAccountList } = this.props;

    onFetchAccountList(userId);
  }

  render() {
    const { accountList, error, isLoading, onDeleteAccount } = this.props;
    const propsToPass = { accountList, error, isLoading, onDeleteAccount };
    return <AccountList {...propsToPass} />;
  }
}

AccountListContainer.propTypes = {
  accountList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      initialBalance: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  error: PropTypes.string,
  userId: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onFetchAccountList: PropTypes.func.isRequired,
  onDeleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    userId: state.auth.user.id,
    isLoading: state.accounts.isLoading,
    error: state.accounts.error,
    accountList: state.accounts.accountList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchAccountList: userId => {
      dispatch(fetchAccounts(userId));
    },
    onDeleteAccount: accountId => {
      dispatch(deleteAccount(accountId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AccountListContainer
);
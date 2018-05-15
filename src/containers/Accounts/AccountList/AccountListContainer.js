import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AccountList from "../../../components/Accounts/AccountList/AccountList";

import { fetchAccounts } from "../../../store/actions/accounts/accounts";

export class AccountListContainer extends Component {
  componentDidMount() {
    const {
      accessToken,
      client,
      expiry,
      tokenType,
      uid,
      userId,
      onFetchAccountList
    } = this.props;

    const authHeaders = { accessToken, client, expiry, tokenType, uid };

    onFetchAccountList(userId, authHeaders);
  }

  render() {
    const { accountList, error, isLoading } = this.props;
    const propsToPass = { accountList, error, isLoading };
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
  userId: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onFetchAccountList: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    accessToken: state.auth.accessToken,
    client: state.auth.client,
    expiry: state.auth.expiry,
    uid: state.auth.uid,
    userId: state.auth.userId,
    isLoading: state.accounts.isLoading,
    error: state.accounts.error,
    accountList: state.accounts.accountList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchAccountList: (userId, authHeaders) => {
      dispatch(fetchAccounts(userId, authHeaders));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AccountListContainer
);

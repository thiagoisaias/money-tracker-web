import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { accountType } from "types";

import List from "./List";

import {
  fetchAccounts,
  clearAccountsError
} from "store/actions/accounts/accounts";

export class Container extends Component {
  static propTypes = {
    accountList: PropTypes.arrayOf(accountType).isRequired,
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    fetchAccounts: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchAccounts } = this.props;

    fetchAccounts();
  }

  render() {
    const { accountList, error, isLoading } = this.props;
    const propsToPass = {
      accountList,
      error,
      isLoading
    };
    return <List {...propsToPass} />;
  }

  componentWillUnmount() {
    const { error, clearAccountsError } = this.props;

    if (error) {
      clearAccountsError();
    }
  }
}

const mapStateToProps = state => ({
  isLoading: state.accounts.isLoading,
  error: state.accounts.error,
  accountList: state.accounts.accountList
});

const mapDispatchToProps = {
  fetchAccounts,
  clearAccountsError
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);

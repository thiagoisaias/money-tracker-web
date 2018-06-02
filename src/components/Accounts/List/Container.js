import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import List from "./List";

import { fetchAccounts } from "store/actions/accounts/accounts";

export class Container extends Component {
  componentDidMount() {
    const { onFetchAccountList } = this.props;

    onFetchAccountList();
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
}

Container.propTypes = {
  accountList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      initialBalance: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  onFetchAccountList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.accounts.isLoading,
  error: state.accounts.error,
  accountList: state.accounts.accountList
});

const mapDispatchToProps = dispatch => ({
  onFetchAccountList: () => {
    dispatch(fetchAccounts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);

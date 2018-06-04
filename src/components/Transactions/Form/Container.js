import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { accountType, categoryType, transactionType } from "types";

import {
  clearTransactionsError,
  clearTransactionToEdit,
  createTransaction,
  updateTransaction
} from "store/actions/transactions/transactions";

import { fetchAccounts } from "store/actions/accounts/accounts";
import { fetchCategories } from "store/actions/categories/categories";

import Form from "./Form";

export class Container extends Component {
  static propTypes = {
    accountList: PropTypes.arrayOf(accountType),
    accountListLoading: PropTypes.bool.isRequired,
    categoryList: PropTypes.arrayOf(categoryType),
    categoryListLoading: PropTypes.bool.isRequired,
    transactionToEdit: transactionType,
    error: PropTypes.string,
    history: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    clearTransactionError: PropTypes.func.isRequired,
    clearTransactionToEdit: PropTypes.func,
    createTransaction: PropTypes.func.isRequired,
    fetchAccounts: PropTypes.func.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    updateTransaction: PropTypes.func.isRequired
  };

  onSubmitData = formData => {
    const {
      history,
      isLoading,
      match,
      createTransaction,
      updateTransaction,
      transactionToEdit
    } = this.props;

    if (isLoading) {
      return;
    }

    const { accountId, ...transformedData } = formData;

    if (match.path === "/transactions/new") {
      createTransaction(transformedData, accountId, history);
    } else if (match.path === "/transactions/:id/edit" && transactionToEdit) {
      updateTransaction(formData, transactionToEdit.id, accountId, history);
    } else {
      return;
    }
  };

  handleSelectOptions() {
    const { accountList, categoryList } = this.props;

    const accountOptionList = accountList.map(item => {
      return { value: item.id, label: item.name };
    });

    const categoryOptionList = categoryList.map(item => {
      return { value: item.id, label: item.name };
    });

    return { accountOptionList, categoryOptionList };
  }

  componentDidMount() {
    const {
      accountList,
      categoryList,
      history,
      match,
      fetchAccounts,
      fetchCategories,
      transactionToEdit
    } = this.props;

    if (categoryList.length === 0) {
      fetchCategories();
    }

    if (accountList.length === 0) {
      fetchAccounts();
    }

    if (match.path === "/transactions/:id/edit" && transactionToEdit === null) {
      history.push("/");
    }
  }

  componentWillUnmount() {
    const {
      error,
      match,
      clearTransactionError,
      clearTransactionToEdit
    } = this.props;

    if (match.path === "/transactions/:id/edit") {
      clearTransactionToEdit();
    }

    if (error) {
      clearTransactionError();
    }
  }

  render() {
    const {
      accountListLoading,
      categoryListLoading,
      error,
      isLoading,
      match,
      transactionToEdit
    } = this.props;

    const {
      accountOptionList,
      categoryOptionList
    } = this.handleSelectOptions();

    return (
      <Form
        accountOptionList={accountOptionList}
        accountListLoading={accountListLoading}
        categoryOptionList={categoryOptionList}
        categoryListLoading={categoryListLoading}
        error={error}
        isLoading={isLoading}
        match={match}
        onSubmitData={this.onSubmitData}
        transactionToEdit={transactionToEdit}
      />
    );
  }
}

Container.propTypes = {};

const mapStateToProps = state => ({
  accountList: state.accounts.accountList,
  accountListLoading: state.accounts.isLoading,
  categoryList: state.categories.categoryList,
  categoryListLoading: state.categories.isLoading,
  error: state.transactions.error,
  isLoading: state.transactions.isLoading,
  transactionToEdit: state.transactions.transactionToEdit
});

const mapDispatchToProps = {
  clearTransactionsError,
  clearTransactionToEdit,
  createTransaction,
  fetchAccounts,
  fetchCategories,
  updateTransaction
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);

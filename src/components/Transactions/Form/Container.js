import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  clearTransactionToEdit,
  createTransaction,
  updateTransaction
} from "store/actions/transactions/transactions";

import { fetchAccounts } from "store/actions/accounts/accounts";
import { fetchCategories } from "store/actions/categories/categories";

import Form from "./Form";

export class Container extends Component {
  onSubmitData = formData => {
    const {
      history,
      isLoading,
      match,
      onCreateTransaction,
      onUpdateTransaction,
      transactionToEdit
    } = this.props;

    if (isLoading) {
      return;
    }

    const { accountId, ...transformedData } = formData;

    if (match.path === "/transactions/new") {
      onCreateTransaction(transformedData, accountId);
    } else if (match.path === "/transactions/:id/edit" && transactionToEdit) {
      onUpdateTransaction(
        transformedData,
        transactionToEdit.id,
        accountId,
        history
      );
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
      onFetchAccounts,
      onFetchCategories,
      transactionToEdit
    } = this.props;

    if (categoryList.length === 0 || accountList.length === 0) {
      onFetchAccounts();
      onFetchCategories();
    }

    if (match.path === "/transactions/:id/edit" && transactionToEdit === null) {
      history.push("/");
    }
  }

  componentWillUnmount() {
    const { match, onClearTransactionToEdit } = this.props;

    if (match.path === "/transactions/:id/edit") {
      onClearTransactionToEdit();
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

Container.propTypes = {
  accountList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      initialBalance: PropTypes.string.isRequired
    })
  ).isRequired,
  accountListLoading: PropTypes.bool.isRequired,
  categoryList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired,
  categoryListLoading: PropTypes.bool.isRequired,
  transactionToEdit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    account: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      initialBalance: PropTypes.string.isRequired
    }).isRequired,
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    }).isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    transactionType: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }),
  error: PropTypes.string,
  history: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  onClearTransactionToEdit: PropTypes.func,
  onCreateTransaction: PropTypes.func.isRequired,
  onFetchAccounts: PropTypes.func.isRequired,
  onFetchCategories: PropTypes.func.isRequired,
  onUpdateTransaction: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    accountList: state.accounts.accountList,
    accountListLoading: state.accounts.isLoading,
    categoryList: state.categories.categoryList,
    categoryListLoading: state.categories.isLoading,
    error: state.transactions.error,
    isLoading: state.transactions.isLoading,
    transactionToEdit: state.transactions.transactionToEdit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearTransactionToEdit: () => {
      dispatch(clearTransactionToEdit());
    },

    onCreateTransaction: (transactionData, accountId) => {
      dispatch(createTransaction(transactionData, accountId));
    },

    onFetchAccounts: () => {
      dispatch(fetchAccounts());
    },

    onFetchCategories: () => {
      dispatch(fetchCategories());
    },

    onUpdateTransaction: (
      transactionData,
      transactionId,
      accountId,
      history
    ) => {
      dispatch(
        updateTransaction(transactionData, transactionId, accountId, history)
      );
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);

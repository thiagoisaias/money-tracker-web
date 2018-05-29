import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  // clearTransactionToEdit,
  createTransaction
  // updateTransaction
} from "store/actions/transactions/transactions";

import { fetchAccounts } from "store/actions/accounts/accounts";
import { fetchCategories } from "store/actions/categories/categories";

import Form from "./Form";

export class Container extends Component {
  onSubmitData = formData => {
    const { isLoading, match, onCreateTransaction } = this.props;

    if (isLoading) {
      return;
    }

    const { accountId, ...transformedData } = formData;

    if (match.path === "/transactions/new") {
      onCreateTransaction(transformedData, accountId);
    }
    // else if (match.path === "/transactions/:id/edit" && transactionToEdit) {
    //   onUpdateTransaction(formData, transactionToEdit.id, history);
    // } else {
    //   return;
    // }
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
    const { onFetchAccounts, onFetchCategories } = this.props;
    onFetchAccounts();
    onFetchCategories();
  }

  render() {
    const {
      accountListLoading,
      categoryListLoading,
      error,
      isLoading,
      match
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
      id: PropTypes.number.isRequired
    }).isRequired,
    transaction: PropTypes.shape({
      id: PropTypes.number.isRequired
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
  onUpdateTransaction: PropTypes.func
};

const mapStateToProps = state => {
  return {
    accountList: state.accounts.accountList,
    accountListLoading: state.accounts.isLoading,
    categoryList: state.categories.categoryList,
    categoryListLoading: state.categories.isLoading,
    error: state.transactions.error,
    isLoading: state.transactions.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateTransaction: (transactionData, accountId) => {
      dispatch(createTransaction(transactionData, accountId));
    },

    onFetchAccounts: () => {
      dispatch(fetchAccounts());
    },

    onFetchCategories: () => {
      dispatch(fetchCategories());
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);

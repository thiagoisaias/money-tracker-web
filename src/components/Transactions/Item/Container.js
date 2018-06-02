import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Item from "./Item";

import {
  deleteTransaction,
  setTransactionToEdit
} from "store/actions/transactions/transactions";

export class Container extends Component {
  handleEdit = () => {
    const { transactionData, history, onSetTransactionToEdit } = this.props;
    onSetTransactionToEdit(transactionData);
    history.push(`/transactions/${transactionData.id}/edit`);
  };

  handleDelete = () => {
    const { isLoading, onDeleteTransaction, transactionData } = this.props;

    if (isLoading) {
      return;
    }

    if (!window.confirm("Are you sure you want to delete this transaction?")) {
      return;
    }
    onDeleteTransaction(transactionData.id, transactionData.account.id);
  };

  render() {
    return (
      <Item
        {...this.props}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
      />
    );
  }
}

Container.propTypes = {
  transactionData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    account: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      initialBalance: PropTypes.string.isRequired
    }).isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    }).isRequired,
    value: PropTypes.string.isRequired,
    transactionType: PropTypes.string.isRequired
  }).isRequired,
  handleActiveItem: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onDeleteTransaction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.transactions.isLoading
});

const mapDispatchToProps = dispatch => ({
  onDeleteTransaction: (transactionId, accountId) => {
    dispatch(deleteTransaction(transactionId, accountId));
  },

  onSetTransactionToEdit: transactionData => {
    dispatch(setTransactionToEdit(transactionData));
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { transactionType } from "types";

import Item from "./Item";

import {
  deleteTransaction,
  setTransactionToEdit
} from "store/actions/transactions/transactions";

export class Container extends Component {
  static propTypes = {
    transactionData: transactionType.isRequired,
    handleActiveItem: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    deleteTransaction: PropTypes.func.isRequired
  };

  handleEdit = () => {
    const { transactionData, history, setTransactionToEdit } = this.props;

    setTransactionToEdit(transactionData);
    history.push(`/transactions/${transactionData.id}/edit`);
  };

  handleDelete = () => {
    const { isLoading, deleteTransaction, transactionData } = this.props;

    if (isLoading) {
      return;
    }

    if (!window.confirm("Are you sure you want to delete this transaction?")) {
      return;
    }

    deleteTransaction(transactionData.id, transactionData.account.id);
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

Container.propTypes = {};

const mapStateToProps = state => ({
  isLoading: state.transactions.isLoading
});

const mapDispatchToProps = {
  deleteTransaction,
  setTransactionToEdit
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);

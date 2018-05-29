import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Item from "./Item";

import { deleteTransaction } from "store/actions/transactions/transactions";

export class Container extends Component {
  handleDelete = () => {
    const { isLoading, onDeleteTransaction, transactionData } = this.props;

    if (isLoading) {
      return;
    }

    if (!window.confirm("Are you sure you want to delete this transaction?")) {
      return;
    }
    onDeleteTransaction(transactionData.id);
  };

  render() {
    return <Item {...this.props} handleDelete={this.handleDelete} />;
  }
}

Container.propTypes = {
  transactionData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    account: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      initialBalance: PropTypes.number.isRequired
    }).isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    }).isRequired,
    value: PropTypes.number.isRequired,
    transactionType: PropTypes.string.isRequired
  }).isRequired,
  handleActiveItem: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onDeleteTransaction: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isLoading: state.transactions.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteTransaction: transactionId => {
      dispatch(deleteTransaction(transactionId));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TransactionList from "../../components/Transactions/TransactionList/TransactionList";

export class TransactionListContainer extends Component {
  componentDidMount() {}

  render() {
    return <TransactionList />;
  }
}

TransactionList.propTypes = {
  transactionList: PropTypes.array
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(
  TransactionListContainer
);

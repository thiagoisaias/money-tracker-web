import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMonths, subMonths } from "date-fns";

import TransactionList from "../../components/Transactions/TransactionList/TransactionList";
import withExpandableItem from "../../hoc/withExpandableItem/withExpandableItem";

import { fetchTransactions } from "../../store/actions/transactions/transactions";

export class TransactionListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: this.props.selectedDate || new Date()
    };
  }

  handleMonthChange = direction => {
    switch (direction) {
      case "next":
        this.handleNextMonth();
        break;
      case "previous":
        this.handlePreviousMonth();
        break;
      default:
        return;
    }
  };

  handleNextMonth = () => {
    this.setState(prevState => {
      return { selectedDate: addMonths(prevState.selectedDate, 1) };
    });
  };

  handlePreviousMonth = () => {
    this.setState(prevState => {
      return { selectedDate: subMonths(prevState.selectedDate, 1) };
    });
  };

  componentDidMount() {
    const { onFetchTransactionList, transactionList } = this.props;
    onFetchTransactionList();
    console.log("Transaction List", transactionList);
  }

  render() {
    const { activeItemId, handleActiveItem, transactionList } = this.props;
    return (
      <TransactionList
        activeItemId={activeItemId}
        handleActiveItem={handleActiveItem}
        handleMonthChange={this.handleMonthChange}
        selectedDate={this.state.selectedDate}
        transactionList={transactionList}
      />
    );
  }
}

TransactionList.propTypes = {
  onFetchTransactionList: PropTypes.func.isRequired,
  selectedDate: PropTypes.string,
  transactionList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      account: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        initialBalance: PropTypes.number.isRequired
      }).isRequired,
      category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      transactionType: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
};

const mapStateToProps = state => {
  return {
    transactionList: state.transactions.transactionList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchTransactionList: () => {
      dispatch(fetchTransactions());
    }
  };
};

export default withExpandableItem(
  connect(mapStateToProps, mapDispatchToProps)(TransactionListContainer)
);

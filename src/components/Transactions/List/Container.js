import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

import { transactionType } from "types";

import List from "./List";
import withExpandableItem from "hoc/withExpandableItem/withExpandableItem";

import { setSelectedDate } from "store/actions/home/home";
import { fetchTransactionsByDate } from "store/actions/transactions/transactions";
import { clearTransactionsError } from "../../../store/actions/transactions/transactions";

export class Container extends Component {
  static propTypes = {
    activeItemId: PropTypes.number,
    clearTransactionsError: PropTypes.func.isRequired,
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    handleActiveItem: PropTypes.func.isRequired,
    fetchTransactionsByDate: PropTypes.func.isRequired,
    transactionList: PropTypes.arrayOf(transactionType),
    selectedDate: PropTypes.string,
    setSelectedDate: PropTypes.func.isRequired
  };

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
    const { isLoading, setSelectedDate, selectedDate } = this.props;
    const momentDate = moment(selectedDate, "MMMM of YYYY");
    const updatedDate = momentDate.clone().add(1, "month");

    if (isLoading) {
      return;
    }

    const parsedDate = updatedDate.format("MMMM of YYYY");

    setSelectedDate(parsedDate);
  };

  handlePreviousMonth = () => {
    const { isLoading, setSelectedDate, selectedDate } = this.props;
    const momentDate = moment(selectedDate, "MMMM of YYYY");

    const updatedDate = momentDate.clone().subtract(1, "month");

    if (isLoading) {
      return;
    }

    const parsedDate = updatedDate.format("MMMM of YYYY");

    setSelectedDate(parsedDate);
  };

  componentDidMount() {
    const {
      fetchTransactionsByDate,
      setSelectedDate,
      selectedDate
    } = this.props;

    const currentDate = moment().format("MMMM of YYYY");
    setSelectedDate(currentDate);

    if (selectedDate) {
      fetchTransactionsByDate(selectedDate);
    }
  }

  componentWillReceiveProps = nextProps => {
    const { isLoading, fetchTransactionsByDate, selectedDate } = this.props;

    if (isLoading) {
      return;
    }

    if (selectedDate !== nextProps.selectedDate) {
      fetchTransactionsByDate(nextProps.selectedDate);
    }
  };

  componentWillUnmount = () => {
    const { error, clearTransactionsError } = this.props;

    if (error) {
      clearTransactionsError();
    }
  };

  render() {
    const {
      activeItemId,
      error,
      isLoading,
      handleActiveItem,
      selectedDate,
      transactionList
    } = this.props;

    return (
      <List
        activeItemId={activeItemId}
        error={error}
        isLoading={isLoading}
        handleActiveItem={handleActiveItem}
        handleMonthChange={this.handleMonthChange}
        selectedDate={selectedDate}
        transactionList={transactionList}
      />
    );
  }
}

const mapStateToProps = state => ({
  error: state.transactions.error,
  isLoading: state.transactions.isLoading,
  selectedDate: state.home.selectedDate,
  transactionList: state.transactions.transactionList
});

const mapDispatchToProps = {
  clearTransactionsError,
  fetchTransactionsByDate,
  setSelectedDate
};

export default withExpandableItem(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Container)
);

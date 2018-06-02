import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

import List from "./List";
import withExpandableItem from "hoc/withExpandableItem/withExpandableItem";

import { setSelectedDate } from "store/actions/home/home";
import { fetchTransactionsByDate } from "store/actions/transactions/transactions";

export class Container extends Component {
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
    const { isLoading, onSetSelectedDate, selectedDate } = this.props;
    const momentDate = moment(selectedDate, "MMMM of YYYY");
    const updatedDate = momentDate.clone().add(1, "month");

    if (isLoading) {
      return;
    }

    const parsedDate = updatedDate.format("MMMM of YYYY");

    onSetSelectedDate(parsedDate);
  };

  handlePreviousMonth = () => {
    const { isLoading, onSetSelectedDate, selectedDate } = this.props;
    const momentDate = moment(selectedDate, "MMMM of YYYY");

    const updatedDate = momentDate.clone().subtract(1, "month");

    if (isLoading) {
      return;
    }

    const parsedDate = updatedDate.format("MMMM of YYYY");

    onSetSelectedDate(parsedDate);
  };

  componentDidMount() {
    const {
      onFetchTransactionsByDate,
      onSetSelectedDate,
      selectedDate
    } = this.props;

    if (!selectedDate) {
      const currentDate = moment().format("MMMM of YYYY");
      onSetSelectedDate(currentDate);
    }

    if (selectedDate) {
      onFetchTransactionsByDate(selectedDate);
    }
  }

  componentWillReceiveProps = nextProps => {
    const { isLoading, onFetchTransactionsByDate, selectedDate } = this.props;

    if (isLoading) {
      return;
    }

    if (selectedDate !== nextProps.selectedDate) {
      onFetchTransactionsByDate(nextProps.selectedDate);
    }
  };

  componentWillUnmount = () => {
    const { onSetSelectedDate } = this.props;
    
    const currentDate = moment().format("MMMM of YYYY");
    onSetSelectedDate(currentDate);
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

Container.propTypes = {
  activeItemId: PropTypes.number,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  handleActiveItem: PropTypes.func.isRequired,
  onFetchTransactionsByDate: PropTypes.func.isRequired,
  transactionList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      account: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        initialBalance: PropTypes.string.isRequired
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

const mapStateToProps = state => ({
  error: state.transactions.error,
  isLoading: state.transactions.isLoading,
  selectedDate: state.home.selectedDate,
  transactionList: state.transactions.transactionList
});

const mapDispatchToProps = dispatch => ({
  onFetchTransactionsByDate: selectedDate => {
    const momentDate = moment(selectedDate, "MMMM of YYYY");
    // Moment month starts at 0
    const selectedMonth = momentDate.month() + 1;
    const selectedYear = momentDate.year();
    dispatch(fetchTransactionsByDate(selectedMonth, selectedYear));
  },

  onSetSelectedDate: selectedDate => {
    dispatch(setSelectedDate(selectedDate));
  }
});

export default withExpandableItem(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);

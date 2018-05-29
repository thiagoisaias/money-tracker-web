import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

import List from "./List";
import withExpandableItem from "hoc/withExpandableItem/withExpandableItem";

import { fetchTransactions } from "store/actions/transactions/transactions";

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: this.props.selectedDate || moment()
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
      return { selectedDate: prevState.selectedDate.clone().add(1, "month") };
    });
  };

  handlePreviousMonth = () => {
    this.setState(prevState => {
      return {
        selectedDate: prevState.selectedDate.clone().subtract(1, "month")
      };
    });
  };

  componentDidMount() {
    const { onFetchTransactionList } = this.props;
    onFetchTransactionList();
  }

  render() {
    const {
      activeItemId,
      error,
      isLoading,
      handleActiveItem,
      transactionList
    } = this.props;
    return (
      <List
        activeItemId={activeItemId}
        error={error}
        isLoading={isLoading}
        handleActiveItem={handleActiveItem}
        handleMonthChange={this.handleMonthChange}
        selectedDate={this.state.selectedDate}
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
  onFetchTransactionList: PropTypes.func.isRequired,
  selectedDate: PropTypes.object,
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
      value: PropTypes.number.isRequired
    })
  )
};

const mapStateToProps = state => {
  return {
    error: state.transactions.error,
    isLoading: state.transactions.isLoading,
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
  connect(mapStateToProps, mapDispatchToProps)(Container)
);

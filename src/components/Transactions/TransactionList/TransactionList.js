import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { format, addMonths, subMonths } from "date-fns";

import { devices } from "../../../utils/devices";
import TransactionItem from "../TransactionItem/TransactionItem";
import withExpandableItem from "../../../hoc/withExpandableItem/withExpandableItem";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 1px;
  margin: 0 auto;
  color: #484848;
  box-shadow: 0.5px 1px 1px 1px #ddd;

  @media ${devices.small} {
    padding: 16px;
    margin-top: 32px;
  }

  @media ${devices.mediumUp} {
    padding: 32px;
    margin: 32px auto;
    border-radius: 2px;
  }
`;

const Header = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f2f2f2;

  @media ${devices.small} {
    flex-direction: column;
  }
`;

const TransactionLink = styled(NavLink)`
  display: block;
  width: 125px;
  height: 35px;
  line-height: 35px;
  padding: 0 8px;
  border-radius: 2px;
  background-color: #add8e6;
  color: #fff;
  font-size: 13px;
  text-align: center;
  
  &:hover {
    cursor: pointer;
    background-color: #a9cdd8;
    opacity: 1;
  }

  @media ${devices.small} {
    margin-top: 8px;
    margin-bottom: 24px;
  }
`;

const MonthSelector = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: default;

  @media ${devices.mediumUp} {
    position: absolute;
    left: calc(50% - 153.28px);
  }
`;

const Arrow = styled.div`
  margin: 0 24px;
  text-align: center;
  width: 32px;
  font-size: 32px;
  line-height: 27px;
  font-weight: 600;
  user-select: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const CurrentMonth = styled.div`
  width: 160px;
  text-align: center;
`;

const BlankStateMessage = styled.p`
  display: block;
  color: #999;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 55px;
  margin-bottom: 16px;
`;

const mockProps = {
  transactionList: [
    {
      id: "AA8236$@",
      date: "2018-04-22",
      description: "Uber",
      value: 150.67,
      category: {
        name: "Transport",
        color: "#DDD"
      },
      transaction_type: "expense"
    },
    {
      id: "BB8236$@",
      date: "2018-04-23",
      description: "Lorem Ipsum Dolor Transaction Mousepad Monitor",
      value: 200.43,
      category: {
        name: "Salary",
        color: "lightblue"
      },
      transaction_type: "earning"
    },
    {
      id: "CC8236$@",
      date: "2018-04-24",
      description: "Lorem Ipsum Dolor",
      value: 8.34,
      category: {
        name: "Home",
        color: "#FA7203"
      },
      transaction_type: "expense"
    }
  ]
};

class TransactionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date()
    };
  }

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

  render() {
    // const mockList = [];
    const mockList = mockProps.transactionList;
    const transactions = mockList.map(transaction => {
      const isActive = this.props.activeItemId === transaction.id;
      return (
        <TransactionItem
          key={transaction.id}
          handleActiveItem={this.props.handleActiveItem}
          isActive={isActive}
          {...transaction}
        />
      );
    });

    return (
      <Container>
        <Header>
          <TransactionLink to="/transaction">
            {"Add Transaction"}
          </TransactionLink>
          <MonthSelector>
            <Arrow onClick={this.handlePreviousMonth}>&lsaquo;</Arrow>
            <CurrentMonth>
              {format(this.state.selectedDate, "MMMM of YYYY")}
            </CurrentMonth>
            <Arrow onClick={this.handleNextMonth}>&rsaquo;</Arrow>
          </MonthSelector>
        </Header>
        {transactions.length > 0 ? (
          transactions
        ) : (
          <BlankStateMessage>
            &#9888;{"There are no transactions in this period."}
          </BlankStateMessage>
        )}
      </Container>
    );
  }
}

TransactionList.propTypes = {
  transactionList: PropTypes.array,
  activeItemId: PropTypes.string,
  handleActiveItem: PropTypes.func.isRequired
};

export default withExpandableItem(TransactionList);

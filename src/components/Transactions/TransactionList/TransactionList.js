import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { format } from "date-fns";
import { NavLink } from "react-router-dom";

import { devices } from "../../../utils/devices";
import TransactionItem from "../TransactionItem/TransactionItem";

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
  width: 130px;
  height: 40px;
  line-height: 40px;
  border-radius: 2px;
  background-color: #333;
  color: #fff;
  font-size: 12px;
  text-align: center;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
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

const TransactionList = props => {
  const {
    activeItemId,
    handleActiveItem,
    handleMonthChange,
    selectedDate,
    transactionList
  } = props;

  const transactions = transactionList.map(transaction => {
    const isActive = activeItemId === transaction.id;
    return (
      <TransactionItem
        key={transaction.id}
        handleActiveItem={handleActiveItem}
        isActive={isActive}
        {...transaction}
      />
    );
  });

  return (
    <Container>
      <Header>
        <TransactionLink to="/transaction">{"Add Transaction"}</TransactionLink>
        <MonthSelector>
          <Arrow
            onClick={() => {
              handleMonthChange("previous");
            }}
          >
            &lsaquo;
          </Arrow>
          <CurrentMonth>{format(selectedDate, "MMMM of YYYY")}</CurrentMonth>
          <Arrow
            onClick={() => {
              handleMonthChange("next");
            }}
          >
            &rsaquo;
          </Arrow>
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
};

TransactionList.propTypes = {
  activeItemId: PropTypes.number,
  handleActiveItem: PropTypes.func.isRequired,
  handleMonthChange: PropTypes.func.isRequired,
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

export default TransactionList;

import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

import {
  Wrapper,
  Header,
  LinkButton,
  MonthSelector,
  Arrow,
  CurrentMonth,
  BlankStateMessage
} from "./styled";

import Item from "../Item/Item";

const List = props => {
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
      <Item
        key={transaction.id}
        handleActiveItem={handleActiveItem}
        isActive={isActive}
        {...transaction}
      />
    );
  });

  return (
    <Wrapper>
      <Header>
        <LinkButton to="/transactions/new">{"Add Transaction"}</LinkButton>
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
    </Wrapper>
  );
};

List.propTypes = {
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
      value: PropTypes.number.isRequired
    })
  )
};

export default List;

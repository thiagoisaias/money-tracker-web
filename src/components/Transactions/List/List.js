import React from "react";
import PropTypes from "prop-types";

import { transactionType } from "types";

import {
  Wrapper,
  Header,
  LinkButton,
  MonthSelector,
  Arrow,
  CurrentMonth,
  BlankStateMessage,
  ErrorMessage
} from "./styled";

import ItemContainer from "../Item/Container";
import Spinner from "shared/Spinner/Spinner";

const List = props => {
  const {
    activeItemId,
    error,
    isLoading,
    handleActiveItem,
    handleMonthChange,
    selectedDate,
    transactionList
  } = props;

  const transactions = transactionList.map(transaction => {
    const isActive = activeItemId === transaction.id;
    return (
      <ItemContainer
        key={transaction.id}
        handleActiveItem={handleActiveItem}
        isActive={isActive}
        transactionData={transaction}
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
          <CurrentMonth>{selectedDate}</CurrentMonth>
          <Arrow
            onClick={() => {
              handleMonthChange("next");
            }}
          >
            &rsaquo;
          </Arrow>
        </MonthSelector>
      </Header>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {transactions.length === 0 &&
        !error &&
        !isLoading && (
          <BlankStateMessage>
            &#9888;{"There are no transactions registered yet."}
          </BlankStateMessage>
        )}
      {isLoading ? <Spinner size={25} color={"#777"} /> : transactions}
    </Wrapper>
  );
};

List.propTypes = {
  activeItemId: PropTypes.number,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  handleActiveItem: PropTypes.func.isRequired,
  handleMonthChange: PropTypes.func.isRequired,
  selectedDate: PropTypes.string,
  transactionList: PropTypes.arrayOf(transactionType)
};

export default List;

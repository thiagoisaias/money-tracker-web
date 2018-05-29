import React from "react";
import PropTypes from "prop-types";

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
          <CurrentMonth>{selectedDate.format("MMMM of YYYY")}</CurrentMonth>
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
  selectedDate: PropTypes.object.isRequired,
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

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TransactionItem from "../TransactionItem/TransactionItem";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 1px;
  margin: 0 auto;
  color: #484848;
  padding: 16px 0;
  box-shadow: 0.5px 1px 1px 1px #ddd;

  @media (max-width: 736px) {
  }

  @media (min-width: 737px) {
    margin: 32px auto;
    border-radius: 2px;
  }
`;

const TransactionList = props => {
  if (!props.transactionList) {
    return null;
  }
  const transactions = props.transactionList.map(transaction => {
    return (
      <TransactionItem
        key={transaction.id}
        handleDelete={this.handleDelete}
        {...transaction}
      />
    );
  });
  return <Container>{transactions}</Container>;
};

TransactionList.propTypes = {
  transactionList: PropTypes.array
};

export default TransactionList;

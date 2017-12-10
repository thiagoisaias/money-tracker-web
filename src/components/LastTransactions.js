import React from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 1px;
  margin: 0 auto;
  border-right: 1px solid #f2f2f2;
  color: #484848;

  @media (max-width: 736px) {

  }

  @media (min-width: 737px) {
    margin: 32px auto;
    border-radius: 5px;
  }
`;

const LastTransactions = props => {
  const transactions = props.transactionsList.map(transaction => {
    return <TransactionItem key={transaction.id} {...transaction} />;
  });
  return <Container>{transactions}</Container>;
};

export default LastTransactions;

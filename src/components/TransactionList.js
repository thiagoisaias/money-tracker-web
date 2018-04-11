import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import TransactionItem from "./TransactionItem";

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

const ACCOUNT_ID = 1;

class TransactionList extends Component {
  state = {
    transactionList: []
  };

  componentDidMount() {
    axios
      .get("/accounts/" + ACCOUNT_ID + "/transactions")
      .then(response => {
        this.setState({
          transactionList: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDelete(transactionId) {
    axios.delete("/transactions/" + transactionId).then(response => {
    });
  }

  render() {
    const transactions = this.state.transactionList.map(transaction => {
      return (
        <TransactionItem
          key={transaction.id}
          handleDelete={this.handleDelete}
          {...transaction}
        />
      );
    });
    return <Container>{transactions}</Container>;
  }
}

export default TransactionList;

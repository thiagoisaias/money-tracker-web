import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { devices } from "../../utils/devices";

import TransactionList from "../TransactionList/TransactionList";
import Balance from "../Balance/Balance";

const TransactionButton = styled.button`
  width: 125px;
  height: 40px;
  background-color: #8378f4;
  cursor: pointer;
  border-radius: 2px;
  color: #f2f2f2;
  font-size: 12px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 736px) {
    margin: 16px auto;
  }
`;

const ACCOUNT_ID = 1;

class Home extends Component {
  state = {
    currentBalance: ""
  };

  componentDidMount() {
    axios
      .get("/accounts/" + ACCOUNT_ID + "/current_balance")
      .then(response => {
        this.setState({
          currentBalance: response.data.current_balance
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Fragment>
        <Balance currentBalance={this.state.currentBalance} />
        <NavLink to="/transaction">
          <TransactionButton> Add Transaction </TransactionButton>
        </NavLink>
        <TransactionList />
      </Fragment>
    );
  }
}

export default Home;

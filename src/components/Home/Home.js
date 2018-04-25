import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "../../utils/devices";

import Balance from "../Balance/Balance";
import Layout from "../Layout/Layout";
import TransactionList from "../TransactionList/TransactionList";

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

  @media ${devices.small} {
    margin: 16px auto;
  }
`;

const Home = props => {
  return (
    <Layout>
      <Balance />
      <NavLink to="/transaction">
        <TransactionButton> Add Transaction </TransactionButton>
      </NavLink>
      <TransactionList />
    </Layout>
  );
};

export default Home;

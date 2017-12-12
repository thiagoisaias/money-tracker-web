import React, { Fragment } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import LastTransactions from "./LastTransactions";
import CurrentBalance from "./CurrentBalance";

const transactions = [
  {
    id: 1,
    description: "Monthly income from freelance jobs",
    date: "05/11/2017",
    category: {
      id: 1,
      name: "Salary",
      color: "#59d9a4"
    },
    value: "1000.00",
    transactionType: "earning"
  },
  {
    id: 2,
    description: "Transference to pay mom",
    date: "08/11/2017",
    category: {
      id: 2,
      name: "Other",
      color: "#f478b8"
    },
    value: "200.00",
    transactionType: "earning"
  },
  {
    id: 3,
    description: "Uber from work to home",
    date: "30/11/2017",
    category: {
      id: 4,
      name: "Transport",
      color: "#59d4d9"
    },
    value: "16.57",
    transactionType: "expense"
  },
  {
    id: 4,
    description: "Uber from home to supermarket",
    date: "10/11/2017",
    category: {
      id: 4,
      name: "Transport",
      color: "#59d4d9"
    },
    value: "27.57",
    transactionType: "expense"
  },
  {
    id: 5,
    description: "Quintal da Varjota",
    date: "10/11/2017",
    category: {
      id: 3,
      name: "Food",
      color: "#8378f4"
    },
    value: "16.57",
    transactionType: "expense"
  },
  {
    id: 6,
    description: "Monte Carlo",
    date: "30/11/2017",
    category: {
      id: 3,
      name: "Food",
      color: "#8378f4"
    },
    value: "16.57",
    transactionType: "expense"
  }
];

const currentBalance = 2456.54;

const TransactionButton = styled.div`
  width: 150px;
  height: 50px;
  line-height: 50px;
  background-color: #8378f4;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
  color: #f2f2f2;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 736px) {
    margin: 16px auto;
  }
`;

const Home = props => {
  return (
    <Fragment>
      <CurrentBalance currentBalance={currentBalance} />
      <NavLink to="/transaction">
        <TransactionButton> Add Transaction </TransactionButton>
      </NavLink>
      <LastTransactions transactionsList={transactions} />
    </Fragment>
  );
};

export default Home;

import React from "react";

import Balance from "../Balance/Balance";
import Layout from "../Layout/Layout";
import TransactionList from "../Transactions/TransactionList/TransactionList";

const Home = props => {
  return (
    <Layout>
      <Balance />
      <TransactionList />
    </Layout>
  );
};

export default Home;

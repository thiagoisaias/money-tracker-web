import React from "react";

import BalanceContainer from "../Balance/Container";
import Layout from "../Layout/Layout";
import TransactionListContainer from "components/Transactions/List/Container";

const Home = props => {
  return (
    <Layout>
      <BalanceContainer />
      <TransactionListContainer />
    </Layout>
  );
};

export default Home;

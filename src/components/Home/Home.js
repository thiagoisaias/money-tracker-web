import React from "react";

import Balance from "../Balance/Balance";
import Layout from "../Layout/Layout";
// import TransactionListContainer from "../../containers/Transactions/TransactionListContainer";

const Home = props => {
  return (
    <Layout>
      <Balance />
      {/* <TransactionListContainer /> */}
    </Layout>
  );
};

export default Home;

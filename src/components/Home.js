import React, { Fragment } from 'react';
import styled from 'styled-components'
import LastTransactions from './LastTransactions';
import CurrentBalance from './CurrentBalance';


const currentBalance = 2456.54;

const Home = (props) => {
  return (
    <Fragment>
      <CurrentBalance currentBalance={currentBalance} />
      {/* <LastTransactions /> */}
    </Fragment>
  )
}

export default Home;
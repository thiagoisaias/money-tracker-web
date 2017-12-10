import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background-color: #fff;
  box-shadow: 1px;
  height: 600px;
  margin: 16px auto;
  border-right: 1px solid #f2f2f2;

  @media (max-width: 736px) {
    
  }
`;

const LastTransactions = (props) => {
  return (
    <Container> List of Transactions (last 15 days) </Container>
  )
}

export default LastTransactions;
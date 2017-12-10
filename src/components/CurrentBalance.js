import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background-color: #59d4d9;
  color: #fff;
  height: 150px;
  line-height: 150px;
  text-align: center;
  border: 1px solid #f2f2f2;
  border-radius: 5px;

  @media (max-width: 736px) {
    margin: 32px;
  }

  @media (min-width: 737px) {
    width: 60vw;
    margin: 55px auto;
  }

`;

const CurrentBalance = (props) => {
  return (
    <Container>Current Balance R$ {props.currentBalance}</Container>
  )
}

export default CurrentBalance;
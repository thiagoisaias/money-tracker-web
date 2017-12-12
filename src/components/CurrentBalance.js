import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background-color: #59d4d9;
  color: #fff;
  padding: 16px;
  height: 150px;
  line-height: 75px;
  text-align: center;
  font-size: 1.5em;

  @media (max-width: 736px) {
  }

  @media (min-width: 737px) {
    margin: 32px auto;
    border-radius: 3px;
  }

`;

const CurrentBalance = (props) => {
  return (
    <Container>
      <p> Current Balance </p> 
      <p>R$ {props.currentBalance} </p>
    </Container>
  )
}

export default CurrentBalance;
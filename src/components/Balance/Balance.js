import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  color: #484848;
  padding: 16px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: default;
  box-shadow: 0.5px 1px 1px 1px #ddd;

  @media (max-width: 736px) {
    
  }

  @media (min-width: 737px) {
    margin: 32px auto;
    border-radius: 2px;
  }
`;

const Description = styled.p`
  margin-bottom: 8px;
`;

const BalanceText = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const Balance = props => {
  return (
    <Container>
      <Description> Current Balance </Description>
      <BalanceText>R$ {props.currentBalance} </BalanceText>
    </Container>
  );
};

export default Balance;

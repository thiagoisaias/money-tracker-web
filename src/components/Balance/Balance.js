import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { devices } from "../../utils/devices";

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

  @media ${devices.mediumUp} {
    margin: 32px auto;
    border-radius: 2px;
  }
`;

const Description = styled.p`
  margin-bottom: 8px;
`;

const Value = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const Balance = props => {
  return (
    <Container>
      <Description> Current Balance </Description>
      <Value>R$ {props.currentBalance} </Value>
    </Container>
  );
};

Balance.propTypes = {
  currentBalance: PropTypes.number.isRequired
};

export default Balance;

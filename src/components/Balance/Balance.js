import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Description, Value } from "./styled";

const mockProps = {
  currentBalance: 55127.32
};

const Balance = props => {
  const { currentBalance } = mockProps;
  return (
    <Wrapper>
      <Description> {"Current Balance"}</Description>
      <Value>$ {currentBalance.toLocaleString()} </Value>
    </Wrapper>
  );
};

Balance.propTypes = {
  currentBalance: PropTypes.number
};

export default Balance;

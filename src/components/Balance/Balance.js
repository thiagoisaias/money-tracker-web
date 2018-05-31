import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Description, Value } from "./styled";
import Spinner from "shared/Spinner/Spinner";

const Balance = props => {
  const { isLoading, overallBalance } = props;
  return (
    <Wrapper>
      <Description> {"Current Balance"}</Description>
      {isLoading ? (
        <Spinner size={25} color={"#777"} />
      ) : (
        <Value>{`$ ${overallBalance && overallBalance.toLocaleString()}`} </Value>
      )}
    </Wrapper>
  );
};

Balance.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  overallBalance: PropTypes.number.isRequired
};

export default Balance;

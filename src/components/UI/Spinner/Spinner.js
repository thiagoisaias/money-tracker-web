import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;

  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props =>
      `${props.color} transparent transparent transparent`};
  }
  > div:nth-child(1) {
    animation-delay: -0.45s;
  }
  > div:nth-child(2) {
    animation-delay: -0.3s;
  }
  > div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = props => {
  const { size, color } = props;
  return (
    <Container size={size}>
      <StyledSpinner color={color}>
        <div />
        <div />
        <div />
        <div />
      </StyledSpinner>
    </Container>
  );
};

Spinner.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default Spinner;

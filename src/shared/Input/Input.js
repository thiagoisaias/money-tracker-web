import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  border: ${props =>
    !props.isValid && props.touched
      ? "1px solid #f9b498"
      : "1px solid #f2f2f2"};
  border-radius: 2px;
  padding: 6px;
  font: inherit;
  color: inherit;

  &:focus {
    border: 1px solid #ddd;
  }

  &::placeholder {
    opacity: 0.6;
  }
`;

const Input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <StyledInput
          {...props.elementConfig}
          isValid={props.isValid}
          name={props.name}
          onChange={props.onChange}
          touched={props.touched}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        >
          {props.elementConfig.options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = <div>{"elementType is missing"}</div>;
      break;
  }

  return inputElement;
};

Input.propTypes = {
  elementConfig: PropTypes.shape({
    type: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      }).isRequired
    )
  }).isRequired,
  elementType: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  touched: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default Input;

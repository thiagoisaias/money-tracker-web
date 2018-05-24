import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import Spinner from "../../UI/Spinner/Spinner";
import withFormHandler from "../../../hoc/withFormHandler/withFormHandler";

const ErrorMessage = styled.p`
  color: salmon;
  font-size: 14px;
  margin: 16px 0;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  display: block;
  height: 40px;
  width: calc(100% - 18px);
  border: 1px solid #eee;
  border-radius: 2px;
  font-family: inherit;
  color: inherit;
  font-size: 14px;
  margin: 6px 0;
  padding-left: 16px;

  &:focus {
    border: 1px solid #d2d2d2;
  }

  &::placeholder {
    opacity: 0.7;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  font: inherit;
  font-size: 12px;
  background-color: #333;
  border-radius: 2px;
  color: #fff;
  margin-top: 16px;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 32px;
  font-size: 22px;
`;

const Alternate = styled.div`
  font-size: 12px;
  color: #333;
  margin-top: 32px;
  text-align: center;
`;

const Link = styled(NavLink)`
  cursor: pointer;
  font-weight: 600;
`;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
      formFields: {
        email: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Email",
            autoComplete: "email"
          },
          name: "Email",
          value: this.props.email || "",
          validation: {},
          isValid: false,
          touched: false
        },
        password: {
          elementType: "input",
          elementConfig: {
            type: "password",
            placeholder: "Password",
            autoComplete: "password"
          },
          name: "Password",
          value: this.props.name || "",
          validation: {},
          isValid: false,
          touched: false
        }
      }
    };
  }

  checkFieldValidity = (value, rules) => {
    let isValid = true;

    // TODO: Add email validation

    return isValid;
  };

  onInputChange = event => {
    const { handleInputChange } = this.props;
    const formFields = { ...this.state.formFields };
    const checkFieldValidity = this.checkFieldValidity;
    const updatedFormState = handleInputChange(
      event,
      formFields,
      checkFieldValidity
    );
    this.setState({
      ...updatedFormState
    });
  };

  handleSubmit = event => {
    const { onSubmitData } = this.props;
    event.preventDefault();

    const formData = {};

    for (let fieldKey in this.state.formFields) {
      formData[fieldKey] = this.state.formFields[fieldKey].value;
    }

    onSubmitData(formData);
  };

  render() {
    const { isLoading, error } = this.props;

    const keyList = [];
    for (let key in this.state.formFields) {
      keyList.push(key);
    }

    const inputList = keyList.map(key => {
      const formField = this.state.formFields[key];
      return (
        <Input
          key={key}
          {...formField.elementConfig}
          name={key}
          value={formField.value}
          touched={formField.touched}
          isValid={formField.isValid}
          onChange={this.onInputChange}
        />
      );
    });

    return (
      <Fragment>
        <Title>{"Sign in"}</Title>
        {error && <ErrorMessage> {error} </ErrorMessage>}
        <Form onSubmit={this.handleSubmit}>
          {inputList}
          <SubmitButton onClick={this.handleSubmit}>
            {isLoading ? <Spinner size={25} color={"#ddd"} /> : "Log In"}
          </SubmitButton>
        </Form>
        <Alternate>
          {"Doesn´t have an account? "}
          <Link to="/auth/signup">{"Sign up here"}</Link>
        </Alternate>
      </Fragment>
    );
  }
}

LoginForm.propTypes = {
  error: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSubmitData: PropTypes.func.isRequired
};

export default withFormHandler(LoginForm);

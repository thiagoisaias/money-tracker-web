import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Spinner from "../../UI/Spinner/Spinner";
import withFormInputHandler from "../../../hoc/withFormInputHandler/withFormInputHandler";

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
  font-size: 12px;
  background-color: #333;
  cursor: pointer;
  border-radius: 2px;
  color: #fff;
  margin-top: 16px;
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

export class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
      formFields: {
        name: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Full name",
            autoComplete: "name"
          },
          name: "Name",
          value: "",
          validation: {
            required: true
          },
          isValid: false,
          touched: false
        },
        email: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Email",
            autoComplete: "email"
          },
          name: "Email",
          value: "",
          validation: {
            required: true
          },
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
          value: "",
          validation: {
            required: true
          },
          isValid: false,
          touched: false
        },
        passwordConfirmation: {
          elementType: "input",
          elementConfig: {
            type: "password",
            placeholder: "Password confirmation",
            autoComplete: "passwordConfirmation"
          },
          name: "Password",
          value: "",
          validation: {
            required: true
          },
          isValid: false,
          touched: false
        }
      }
    };
  }

  checkFieldValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

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
    const { submitData } = this.props;
    event.preventDefault();

    const formData = {};

    for (let fieldKey in this.state.formFields) {
      formData[fieldKey] = this.state.formFields[fieldKey].value;
    }

    submitData(formData);
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
        <Title>{"Create an account"}</Title>
        <Form onSubmit={this.handleSubmit}>
          {error && <ErrorMessage> {error} </ErrorMessage>}
          {inputList}
          <SubmitButton onClick={this.handleSubmit}>
            {isLoading ? <Spinner width={35} height={35} /> : "Sign Up"}
          </SubmitButton>
        </Form>
        <Alternate>
          {"Already have an account? "}
          <Link to="/auth/login">{"Login here"}</Link>
        </Alternate>
      </Fragment>
    );
  }
}

SignupForm.propTypes = {
  error: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  submitData: PropTypes.func.isRequired
};

export default withFormInputHandler(SignupForm);

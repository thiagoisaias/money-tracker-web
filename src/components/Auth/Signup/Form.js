import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import {
  StyledForm,
  StyledInput,
  SubmitButton,
  Title,
  Alternate,
  Link,
  ErrorMessage
} from "./styled";

import Spinner from "shared/Spinner/Spinner";
import withFormHandler from "hoc/withFormHandler/withFormHandler";

class Form extends Component {
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

  onInputChange = (event, key) => {
    const { handleInputChange } = this.props;
    const formFields = { ...this.state.formFields };
    const checkFieldValidity = this.checkFieldValidity;

    const newValue = event.target.value;

    const updatedFormState = handleInputChange(
      newValue,
      key,
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
        <StyledInput
          key={key}
          {...formField.elementConfig}
          name={key}
          value={formField.value}
          touched={formField.touched}
          isValid={formField.isValid}
          onChange={event => {
            this.onInputChange(event, key);
          }}
        />
      );
    });

    return (
      <Fragment>
        <Title>{"Create an account"}</Title>
        <StyledForm onSubmit={this.handleSubmit}>
          {error && <ErrorMessage> {error} </ErrorMessage>}
          {inputList}
          <SubmitButton onClick={this.handleSubmit}>
            {isLoading ? <Spinner size={25} color={"#ddd"} /> : "Sign Up"}
          </SubmitButton>
        </StyledForm>
        <Alternate>
          {"Already have an account? "}
          <Link to="/auth/login">{"Login here"}</Link>
        </Alternate>
      </Fragment>
    );
  }
}

Form.propTypes = {
  error: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSubmitData: PropTypes.func.isRequired
};

export default withFormHandler(Form);

import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Container,
  Row,
  Message,
  ColoredMark,
  Title,
  FormContainer,
  FormGroup,
  Label,
  SubmitButton,
  ErrorMessage
} from "shared/Form/styled";
import Input from "shared/Input/Input";
import Layout from "components/Layout/Layout";
import Spinner from "shared/Spinner/Spinner";
import withFormHandler from "hoc/withFormHandler/withFormHandler";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormValid: false,
      formFields: {
        description: {
          elementType: "input",
          elementConfig: {
            type: "text"
          },
          name: "Description",
          value: this.props.description || "",
          validation: {
            required: true
          },
          isValid: false,
          touched: false
        },
        value: {
          elementType: "input",
          elementConfig: {
            type: "number"
          },
          name: "Value",
          value: this.props.value || "",
          validation: {
            required: true
          },
          isValid: false,
          touched: false
        },
        date: {
          elementType: "input",
          elementConfig: {
            type: "date"
          },
          name: "Date",
          value: this.props.date || "",
          validation: {
            required: true
          },
          isValid: false,
          touched: false
        },
        account: {
          elementType: "select",
          elementConfig: {
            options: [
              { value: "ole", displayValue: "ole" },
              { value: "ola", displayValue: "ola" }
            ]
          },
          name: "Account",
          value: "ole",
          validation: {},
          isValid: false,
          touched: false
        },
        category: {
          elementType: "select",
          elementConfig: {
            options: [
              { value: "ole", displayValue: "ole" },
              { value: "ola", displayValue: "ola" }
            ]
          },
          name: "Category",
          value: "ole",
          validation: {},
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
    event.preventDefault();
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
    const { generateFormData, onSubmitData } = this.props;
    event.preventDefault();

    const formData = generateFormData(this.state.formFields);

    console.log(formData);
    onSubmitData(formData);
  };

  componentDidMount() {
    const { match, checkFormValidity } = this.props;

    const isFormValid = checkFormValidity(
      this.state.formFields,
      this.checkFieldValidity
    );

    if (match.path === "/accounts/:id/edit" && isFormValid) {
      this.setState({
        ...this.state,
        isFormValid: true
      });
    }
  }

  render() {
    const { error, isLoading, match } = this.props;
    const formTitle =
      match.path === "/transactions/new"
        ? "Add Transaction"
        : "Edit Transaction";

    const keyList = [];
    for (let key in this.state.formFields) {
      keyList.push(key);
    }

    const inputList = keyList.map(key => {
      const formField = this.state.formFields[key];
      return (
        <FormGroup key={key}>
          <Label>
            {formField.name} <ColoredMark>*</ColoredMark>
          </Label>
          <Input
            elementConfig={formField.elementConfig}
            elementType={formField.elementType}
            name={key}
            value={formField.value}
            touched={formField.touched}
            isValid={formField.isValid}
            onChange={this.onInputChange}
          />
        </FormGroup>
      );
    });

    return (
      <Layout>
        <Container>
          <Title>{formTitle}</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <FormContainer onSubmit={this.handleSubmit}>
            {inputList}
            <Row>
              <SubmitButton
                disabled={!this.state.isFormValid}
                onClick={this.handleSubmit}
              >
                {isLoading ? <Spinner size={25} color={"#ddd"} /> : "Submit"}
              </SubmitButton>
              <Message>
                <ColoredMark>*</ColoredMark>
                {" represent required fields."}
              </Message>
            </Row>
          </FormContainer>
        </Container>
      </Layout>
    );
  }
}

Form.propTypes = {
  // TODO: Add transaction properties
  checkFormValidity: PropTypes.func.isRequired,
  error: PropTypes.string,
  generateFormData: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  onSubmitData: PropTypes.func.isRequired
};

export default withFormHandler(Form);

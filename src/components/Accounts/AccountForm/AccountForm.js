import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { devices } from "../../../utils/devices";
import Layout from "../../Layout/Layout";
import Spinner from "../../UI/Spinner/Spinner";
import withFormInputHandler from "../../../hoc/withFormInputHandler/withFormInputHandler";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 1px;
  margin: 0 auto;
  color: #484848;
  box-shadow: 0.5px 1px 1px 1px #ddd;

  @media ${devices.small} {
    padding: 32px 16px;
  }

  @media ${devices.mediumUp} {
    padding: 32px 32px 55px 32px;
    margin: 32px auto;
    border-radius: 2px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Message = styled.div`
  font-size: 12px;
  color: #777;
`;

const ColoredMark = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #add8e6;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 32px;
`;

const FormContainer = styled.form``;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`;

const Label = styled.label`
  font-weight: 400;
  color: #777;
  margin-bottom: 6px;
`;

const Input = styled.input`
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

const SubmitButton = styled.button`
  border-radius: 2px;
  font: inherit;
  font-size: 12px;
  background-color: #333;
  color: #fff;
  width: 130px;
  height: 40px;

  background-color: ${props => (props.disabled ? "#777" : "#333")};

  &:hover {
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    opacity: ${props => (props.disabled ? 1 : 0.95)};
  }
`;

const ErrorMessage = styled.p`
  color: #e75252;
  font-size: 14px;
  margin-top: 16px;
`;

class AccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormValid: false,
      formFields: {
        name: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Enter account name"
          },
          name: "Name",
          value: this.props.name || "",
          validation: {
            required: true
          },
          isValid: false,
          touched: false
        },
        initialBalance: {
          elementType: "input",
          elementConfig: {
            type: "number",
            placeholder: "Enter initial balance"
          },
          name: "Initial Balance",
          value: this.props.initialBalance || "",
          validation: {
            required: true,
            nonNegative: true
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

    if (rules.nonNegative) {
      isValid = value >= 0 && isValid;
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

  componentDidMount() {
    const { match } = this.props;

    if (match.path === "/accounts/:id/edit") {
      this.setState({
        ...this.state,
        isFormValid: true
      });
    }
  }

  render() {
    const { error, isLoading, match } = this.props;
    const formTitle =
      match.path === "/accounts/new" ? "Add Account" : "Edit Account";

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
            {...formField.elementConfig}
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

AccountForm.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  error: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  initialBalance: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  submitData: PropTypes.func.isRequired
};

export default withFormInputHandler(AccountForm);

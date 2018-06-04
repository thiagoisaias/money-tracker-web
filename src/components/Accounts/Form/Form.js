import React, { Component } from "react";
import PropTypes from "prop-types";

import { accountType } from "types";

import {
  Container,
  StyledInput,
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

import Layout from "components/Layout/Layout";
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
            placeholder: "Enter account name"
          },
          name: "Name",
          value:
            (this.props.accountToEdit && this.props.accountToEdit.name) || "",
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
          value:
            (this.props.accountToEdit &&
              this.props.accountToEdit.initialBalance) ||
            "",
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

  onInputChange = (event, key) => {
    const { handleInputChange } = this.props;
    const formFields = { ...this.state.formFields };
    const checkFieldValidity = this.checkFieldValidity;

    let newValue = null;
    if (!event) {
      newValue = null;
    } else {
      newValue = event.target ? event.target.value : event;
    }

    const updatedFormState = handleInputChange(
      newValue,
      key,
      formFields,
      checkFieldValidity
    );
    this.setState({
      ...this.state,
      ...updatedFormState
    });
  };

  handleSubmit = event => {
    const { generateFormData, onSubmitData } = this.props;
    event.preventDefault();

    const formData = generateFormData(this.state.formFields);

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
          <StyledInput
            {...formField.elementConfig}
            value={formField.value}
            touched={formField.touched}
            isValid={formField.isValid}
            onChange={event => {
              this.onInputChange(event, key);
            }}
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
  accountToEdit: accountType,
  checkFormValidity: PropTypes.func.isRequired,
  error: PropTypes.string,
  generateFormData: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  onSubmitData: PropTypes.func.isRequired
};

export default withFormHandler(Form);

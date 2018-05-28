import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import {
  Wrapper,
  SelectWrapper,
  InputWrapper,
  SubmitRow,
  Row,
  StyledDatePicker,
  Message,
  ColoredMark,
  Title,
  FormContainer,
  Label,
  SubmitButton,
  ErrorMessage
} from "./styled";

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
        transactionType: {
          elementType: "select",
          elementConfig: {
            options: [
              { value: "expense", label: "Expense" },
              { value: "earning", label: "Earning" }
            ]
          },
          label: "Type",
          value: "expense",
          validation: {},
          isValid: false,
          touched: false
        },
        description: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Add a transaction description"
          },
          label: "Description",
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
            type: "number",
            placeholder: "$ 0.00"
          },
          label: "Value",
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
          label: "Date",
          value: this.props.date || moment(),
          validation: {
            requiredDate: true
          },
          isValid: false,
          touched: false
        },
        account: {
          elementType: "select",
          elementConfig: {
            options: [{ id: 1, label: "ole" }, { id: 2, label: "ola" }]
          },
          label: "Account",
          value: 1,
          validation: {},
          isValid: true,
          touched: false
        },
        category: {
          elementType: "select",
          elementConfig: {
            options: [{ id: 1, label: "ole" }, { id: 2, label: "ola" }]
          },
          label: "Category",
          value: 1,
          validation: {},
          isValid: true,
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

    if (rules.requiredDate) {
      isValid = moment.isMoment(value);
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
      ...this.state,
      ...updatedFormState
    });
  };

  onDateChange = (event, key) => {
    const { handleDateChange } = this.props;
    const formFields = { ...this.state.formFields };

    const updatedFormState = handleDateChange(
      event,
      key,
      formFields,
      this.checkFieldValidity
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

    console.log(formData);
    // onSubmitData(formData);
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

    const formFields = this.state.formFields;
    const inputList = (
      <Fragment>
        <SelectWrapper>
          <Label>
            {"Type"} <ColoredMark>*</ColoredMark>
          </Label>
          <Input
            elementConfig={formFields.transactionType.elementConfig}
            elementType={formFields.transactionType.elementType}
            name={"transactionType"}
            value={formFields.transactionType.value}
            onChange={this.onInputChange}
          />
        </SelectWrapper>
        <InputWrapper>
          <Label>
            {"Description"} <ColoredMark>*</ColoredMark>
          </Label>
          <Input
            elementConfig={formFields.description.elementConfig}
            elementType={formFields.description.elementType}
            name={"description"}
            value={formFields.description.value}
            touched={formFields.description.touched}
            isValid={formFields.description.isValid}
            onChange={this.onInputChange}
          />
        </InputWrapper>
        <Row>
          <InputWrapper>
            <Label>
              {"Value"} <ColoredMark>*</ColoredMark>
            </Label>
            <Input
              elementConfig={formFields.value.elementConfig}
              elementType={formFields.value.elementType}
              name={"value"}
              value={formFields.value.value}
              touched={formFields.value.touched}
              isValid={formFields.value.isValid}
              onChange={this.onInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>
              {"Date"} <ColoredMark>*</ColoredMark>
            </Label>
            <StyledDatePicker
              elementConfig={formFields.date.elementConfig}
              elementType={formFields.date.elementType}
              name={"date"}
              selected={formFields.date.value}
              isValid={formFields.date.isValid}
              touched={formFields.date.touched}
              onChange={event => {
                this.onDateChange(event, "date");
              }}
            />
          </InputWrapper>
        </Row>
        <Row>
          <SelectWrapper>
            <Label>
              {"Account"} <ColoredMark>*</ColoredMark>
            </Label>
            <Input
              elementConfig={formFields.account.elementConfig}
              elementType={formFields.account.elementType}
              name={"account"}
              value={formFields.account.value}
              onChange={this.onInputChange}
            />
          </SelectWrapper>
          <SelectWrapper>
            <Label>
              {"Category"} <ColoredMark>*</ColoredMark>
            </Label>
            <Input
              elementConfig={formFields.category.elementConfig}
              elementType={formFields.category.elementType}
              name={"category"}
              value={formFields.category.value}
              onChange={this.onInputChange}
            />
          </SelectWrapper>
        </Row>
      </Fragment>
    );

    return (
      <Layout>
        <Wrapper>
          <Title>{formTitle}</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <FormContainer onSubmit={this.handleSubmit}>
            {inputList}
            <SubmitRow>
              <SubmitButton
                // disabled={!this.state.isFormValid}
                onClick={this.handleSubmit}
              >
                {isLoading ? <Spinner size={25} color={"#ddd"} /> : "Submit"}
              </SubmitButton>
              <Message>
                <ColoredMark>*</ColoredMark>
                {" represent required fields."}
              </Message>
            </SubmitRow>
          </FormContainer>
        </Wrapper>
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
  handleDateChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  onSubmitData: PropTypes.func.isRequired
};

export default withFormHandler(Form);

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import {
  Wrapper,
  SelectWrapper,
  InputWrapper,
  SubmitRow,
  Row,
  StyledInput,
  StyledDatePicker,
  StyledSelect,
  Message,
  ColoredMark,
  Title,
  FormContainer,
  Label,
  SubmitButton,
  ErrorMessage
} from "./styled";

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
          value: (this.props.transactionToEdit &&
            this.props.transactionToEdit.transactionType) || {
            value: "expense",
            label: "Expense"
          },
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
          value:
            (this.props.transactionToEdit &&
              this.props.transactionToEdit.description) ||
            "",
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
          value:
            (this.props.transactionToEdit &&
              this.props.transactionToEdit.value) ||
            "",
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
          value:
            (this.props.transactionToEdit &&
              moment(this.props.transactionToEdit.date)) ||
            moment(),
          validation: {
            requiredDate: true
          },
          isValid: false,
          touched: false
        },
        accountId: {
          elementType: "select",
          elementConfig: {
            options: this.props.accountOptionList
          },
          label: "Account",
          value:
            (this.props.transactionToEdit &&
              this.props.transactionToEdit.account && {
                value: this.props.transactionToEdit.account.id,
                label: this.props.transactionToEdit.account.name
              }) ||
            null,
          validation: {
            requiredSelect: true
          },
          isValid: true,
          touched: false
        },
        categoryId: {
          elementType: "select",
          elementConfig: {
            options: this.props.categoryOptionList
          },
          label: "Category",
          value:
            (this.props.transactionToEdit &&
              this.props.transactionToEdit.category && {
                value: this.props.transactionToEdit.category.id,
                label: this.props.transactionToEdit.category.name
              }) ||
            null,
          validation: {
            requiredSelect: true
          },
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
      isValid = moment.isMoment(value) && isValid;
    }

    if (rules.requiredSelect) {
      isValid = value && value.value && value.label && isValid;
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

  handleFormStateOnEditRoute() {
    const { match, checkFormValidity } = this.props;

    const isFormValid = checkFormValidity(
      this.state.formFields,
      this.checkFieldValidity
    );

    if (match.path === "/transactions/:id/edit" && isFormValid) {
      this.setState({
        ...this.state,
        isFormValid: true
      });
    }
  }

  componentDidMount() {
    this.handleFormStateOnEditRoute();
  }

  render() {
    const {
      accountListLoading,
      categoryListLoading,
      error,
      isLoading,
      match
    } = this.props;
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
          <StyledSelect
            {...formFields.transactionType.elementConfig}
            searchable={false}
            value={formFields.transactionType.value}
            onChange={event => {
              this.onInputChange(event, "transactionType");
            }}
          />
        </SelectWrapper>
        <InputWrapper>
          <Label>
            {"Description"} <ColoredMark>*</ColoredMark>
          </Label>
          <StyledInput
            {...formFields.description.elementConfig}
            isValid={formFields.description.isValid}
            touched={formFields.description.touched}
            value={formFields.description.value}
            onChange={event => {
              this.onInputChange(event, "description");
            }}
          />
        </InputWrapper>
        <Row>
          <SelectWrapper>
            <Label>
              {"Account"} <ColoredMark>*</ColoredMark>
            </Label>
            <StyledSelect
              {...formFields.accountId.elementConfig}
              searchable={false}
              name={"account"}
              isLoading={accountListLoading}
              value={formFields.accountId.value}
              onChange={event => {
                this.onInputChange(event, "accountId");
              }}
            />
          </SelectWrapper>
          <SelectWrapper>
            <Label>
              {"Category"} <ColoredMark>*</ColoredMark>
            </Label>
            <StyledSelect
              {...formFields.categoryId.elementConfig}
              searchable={false}
              isLoading={categoryListLoading}
              value={formFields.categoryId.value}
              onChange={event => {
                this.onInputChange(event, "categoryId");
              }}
            />
          </SelectWrapper>
        </Row>
        <Row>
          <InputWrapper largeHalf>
            <Label>
              {"Value"} <ColoredMark>*</ColoredMark>
            </Label>
            <StyledInput
              {...formFields.value.elementConfig}
              value={formFields.value.value}
              touched={formFields.value.touched}
              isValid={formFields.value.isValid}
              onChange={event => {
                this.onInputChange(event, "value");
              }}
            />
          </InputWrapper>
          <InputWrapper largeHalf>
            <Label>
              {"Date"} <ColoredMark>*</ColoredMark>
            </Label>
            <StyledDatePicker
              {...formFields.date.elementConfig}
              selected={formFields.date.value}
              isValid={formFields.date.isValid}
              touched={formFields.date.touched}
              onChange={event => {
                this.onInputChange(event, "date");
              }}
            />
          </InputWrapper>
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
                disabled={!this.state.isFormValid}
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
  accountOptionList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  accountListLoading: PropTypes.bool.isRequired,
  categoryOptionList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  categoryListLoading: PropTypes.bool.isRequired,
  checkFormValidity: PropTypes.func.isRequired,
  error: PropTypes.string,
  generateFormData: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  onSubmitData: PropTypes.func.isRequired,
  transactionToEdit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    account: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      initialBalance: PropTypes.number.isRequired
    }).isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    }).isRequired,
    value: PropTypes.number.isRequired,
    transactionType: PropTypes.string.isRequired
  })
};

export default withFormHandler(Form);

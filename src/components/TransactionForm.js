import React, { Component } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const FormContainer = styled.form`
  background-color: #fff;
  border: 1px solid #f2f2f2;
  

  > h2 {
    font-size: 1.5em;
    margin-bottom: 32px;
  }

  @media (max-width: 736px) {
    padding: 16px;
  }

  @media (min-width: 737px) {
    max-width: 900px;
    padding: 32px;
    margin: 32px auto;
    border-radius: 3px;
  }
`;

const TransactionDatePicker = styled(DatePicker)`
  display: block;
  height: 30px;
  width: 150px;
  padding-left: 16px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  margin: 8px 0;
  font-size: 14px;
  cursor: pointer;
`;

const FormGroup = styled.div`
  margin: 16px 0;
`;

const FormLabel = styled.label`
  display: block;
`;

const FormInput = styled.input`
  display: block;
  height: 30px;
  padding-left: 16px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  margin: 8px 0;
  font-size: 14px;
  width: ${props => (props.bigger ? "300px" : null)};
`;

const FormSelect = styled.select`
  display: block;
  margin: 8px 0;
`;

const SubmitButton = styled.div`
  width: 150px;
  height: 50px;
  line-height: 50px;
  background-color: #8378f4;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
  color: #f2f2f2;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 736px) {
    margin: 32px auto;
  }

  @media (min-width: 737px) {
    margin-top: 55px;
  }
`;

const categories = [
  {
    id: 1,
    name: "Salary",
    color: "#59d9a4"
  },
  {
    id: 2,
    name: "Other",
    color: "#f478b8"
  },
  {
    id: 3,
    name: "Food",
    color: "#8378f4"
  },
  {
    id: 4,
    name: "Transport",
    color: "#59d4d9"
  }
];

class TransactionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      value: "",
      category: "",
      transactionType: "",
      date: moment()
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleDateChange(event) {
    const selectedDate = event;
    this.setState({
      date: selectedDate
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Send form data to API", this.state);
    this.props.history.replace("/home");
  }

  render() {
    const options = categories.map(category => {
      return (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>
      );
    });

    return (
      <FormContainer>
        <h2>Transaction</h2>
        <FormGroup>
          <FormLabel>Transaction Type</FormLabel>
          <FormSelect name="transactionType" onChange={this.handleInputChange}>
            <option value="expense">Expense</option>
            <option value="earning">Earning</option>
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel>Description</FormLabel>
          <FormInput
            bigger
            name="description"
            type="text"
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Value</FormLabel>
          <FormInput
            name="value"
            type="number"
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Data</FormLabel>
          <TransactionDatePicker
            name="date"
            dateFormat="DD/MM/YYYY"
            onChange={this.handleDateChange}
            selected={this.state.date}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Category</FormLabel>
          <FormSelect name="category" onChange={this.handleInputChange}>
            {options}
          </FormSelect>
        </FormGroup>
        <SubmitButton onClick={this.handleSubmit}> Submit </SubmitButton>
      </FormContainer>
    );
  }
}

export default TransactionForm;

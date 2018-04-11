import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormContainer = styled.form`
  background-color: #fff;
  box-shadow: 0.5px 1px 1px 1px #ddd;


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
    border-radius: 2px;
  }
`;

const TransactionDatePicker = styled(DatePicker)`
  display: block;
  height: 30px;
  width: 150px;
  padding-left: 16px;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
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
  border-radius: 2px;
  margin: 8px 0;
  font-size: 14px;
  width: ${props => (props.bigger ? "300px" : null)};
`;

const FormSelect = styled.select`
  display: block;
  margin: 8px 0;
`;

const SubmitButton = styled.button`
  width: 125px;
  height: 40px;
  background-color: #8378f4;
  cursor: pointer;
  border-radius: 2px;
  color: #f2f2f2;
  font-size: 12px;

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

class TransactionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoriesList: [],
      formData: {
        description: "",
        value: "",
        category: 0,
        transactionType: 0,
        date: moment()
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("/categories")
      .then(response => {
        this.setState({
          categoriesList: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    });
  }

  handleDateChange(event) {
    const selectedDate = event;
    this.setState({
      formData: {
        ...this.state.formData,
        date: selectedDate
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Send form data to API", this.state.formData);
    // this.props.history.replace("/");
  }

  render() {
    const options = this.state.categoriesList.map(category => {
      return (
        <option key={category.id} value={category.id}>
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
            <option value="0">Expense</option>
            <option value="1">Earning</option>
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
          <FormLabel>Date</FormLabel>
          <TransactionDatePicker
            name="date"
            dateFormat="DD/MM/YYYY"
            onChange={this.handleDateChange}
            selected={this.state.formData.date}
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

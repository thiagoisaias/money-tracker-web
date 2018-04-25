import React, { Component } from "react";
import styled from "styled-components";
import { devices } from "../../utils/devices";

import Layout from "../Layout/Layout";

const FormContainer = styled.form`
  background-color: #fff;
  box-shadow: 0.5px 1px 1px 1px #ddd;

  > h2 {
    font-size: 1.5em;
    margin-bottom: 32px;
  }

  @media ${devices.small} {
    padding: 16px;
  }

  @media ${devices.mediumUp} {
    max-width: 900px;
    padding: 32px;
    margin: 32px auto;
    border-radius: 2px;
  }
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

  @media ${devices.small} {
    margin: 32px auto;
  }

  @media ${devices.mediumUp} {
    margin-top: 55px;
  }
`;

class TransactionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoriesList: [],
      transactionData: {
        description: "",
        value: "",
        category: 0,
        transactionType: 0,
        date: Date.now()
      }
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      transactionData: {
        ...this.state.transactionData,
        [name]: value
      }
    });
  };

  handleDateChange = event => {
    const selectedDate = event;
    this.setState({
      transactionData: {
        ...this.state.transactionData,
        date: selectedDate
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Send form data to API", this.state.transactionData);
  };

  render() {
    const options = this.state.categoriesList.map(category => {
      return (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      );
    });

    return (
      <Layout>
        <FormContainer>
          <h2>Transaction</h2>
          <FormGroup>
            <FormLabel>Transaction Type</FormLabel>
            <FormSelect
              name="transactionType"
              onChange={this.handleInputChange}
            >
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
            <FormInput
              name="date"
              type="date"
              onChange={this.handleInputChange}
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
      </Layout>
    );
  }
}

export default TransactionForm;

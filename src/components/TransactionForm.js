import React, { Component } from "react";
import styled from "styled-components";

const FormContainer = styled.form`

  
`;

const FormInput = styled.input``;

const FormSelect = styled.select``;

const SubmitButton = styled.div`
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
]

class TransactionForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {}

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {

    const options = categories.map((category) => {
      return(
        <option key={category.id} value={category.name}>{category.name}</option>
      )
    })

    return (
      <FormContainer>
        <FormInput
          name="description"
          placeholder="Description"
          type="text"
          onChange={this.handleChange}
        />
        <FormInput
          name="value"
          placeholder="Description"
          type="text"
          onChange={this.handleChange}
        />
        <FormSelect>{options}</FormSelect>
        <FormInput />
        <SubmitButton> Submit </SubmitButton>
      </FormContainer>
    );
  }
}

export default TransactionForm;

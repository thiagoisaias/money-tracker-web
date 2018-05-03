import React, { Component } from "react";
import styled from "styled-components";

import { devices } from "../../../utils/devices";
import Button from "../../Button/Button";
import Layout from "../../Layout/Layout";

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

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const FormContainer = styled.form`
  padding-top: 32px;

  @media ${devices.mediumUp} {
    display: flex;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;

  @media ${devices.small} {
    width: 100%;
  }

  @media ${devices.mediumUp} {
    width: 45%;
    &:first-child {
      margin-right: 24px;
    }
  }
`;

const Label = styled.label`
  font-weight: 400;
  color: #777;
  margin-bottom: 6px;
`;

const Input = styled.input`
  border: 1px solid #f2f2f2;
  border-radius: 2px;
  padding: 6px;
  font-size: 13px;
  font-family: inherit;
  color: inherit;

  &:focus {
    border: 1px solid #ddd;
  }
`;

class AccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountData: {
        name: null,
        initialBalance: null
      }
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      accountData: {
        ...this.state.transactionData,
        [name]: value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Send form data to API", this.state.accountData);
  };

  render() {
    return (
      <Layout>
        <Container>
          <Title>{"New Account"}</Title>
          <FormContainer onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>{"Name"}</Label>
              <Input
                type="text"
                name="name"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>{"Initial Balance"}</Label>
              <Input
                type="number"
                name="initialBalance"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </FormContainer>
          <Button onClick={this.handleSubmit}>{"Submit"}</Button>
        </Container>
      </Layout>
    );
  }
}

export default AccountForm;

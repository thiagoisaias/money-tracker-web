import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { devices } from "../../../utils/devices";
import Button from "../../Button/Button";
import Layout from "../../Layout/Layout";
import Spinner from "../../Spinner/Spinner";

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

const FormContainer = styled.form``;

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
  font: inherit;
  color: inherit;

  &:focus {
    border: 1px solid #ddd;
  }
`;

const Row = styled.div`
  @media ${devices.mediumUp} {
    display: flex;
    justify-content: space-between;
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
      name: this.props.name || "",
      initialBalance: this.props.initialBalance || ""
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { isLoading, submitData } = this.props;
    event.preventDefault();
    if (isLoading) {
      return;
    }
    submitData(this.state);
  };

  render() {
    const { error, isLoading, match } = this.props;
    return (
      <Layout>
        <Container>
          <Title>
            {match.path === "/accounts/new" ? "New Account" : "Edit Account"}
          </Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <FormContainer onSubmit={this.handleSubmit}>
            <Row>
              <FormGroup>
                <Label>{"Name"}</Label>
                <Input
                  type="text"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>{"Initial Balance"}</Label>
                <Input
                  type="number"
                  value={this.state.initialBalance}
                  name="initialBalance"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Row>
            <Button onClick={this.handleSubmit}>
              {isLoading ? <Spinner height={34} width={34} /> : "Submit"}
            </Button>
          </FormContainer>
        </Container>
      </Layout>
    );
  }
}

AccountForm.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  error: PropTypes.array,
  initialBalance: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  submitData: PropTypes.func.isRequired
};

export default AccountForm;

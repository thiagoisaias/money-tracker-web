import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { devices } from "../../../utils/devices";
import Button from "../../Button/Button";
import Layout from "../../Layout/Layout";
import Spinner from "../../Spinner/Spinner";

import {
  createAccount,
  clearAccountState
} from "../../../store/actions/accounts/accounts";

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
  font-size: 13px;
  font-family: inherit;
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

export class AccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      initial_balance: null
    };
  }

  componentWillUnmount() {
    this.props.onClearAccountState();
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
    const {
      accessToken,
      client,
      expiry,
      tokenType,
      uid,
      isLoading,
      userId,
      onCreateAccount
    } = this.props;

    const authHeaders = { accessToken, client, expiry, tokenType, uid };

    event.preventDefault();

    if (isLoading) {
      return;
    }
    onCreateAccount(this.state, userId, authHeaders);
  };

  render() {
    const { error, isLoading } = this.props;
    return (
      <Layout>
        <Container>
          <Title>{"New Account"}</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <FormContainer onSubmit={this.handleSubmit}>
            <Row>
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
                  name="initial_balance"
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
  userId: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.array,
  onCreateAccount: PropTypes.func.isRequired,
  onClearAccountState: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    accessToken: state.auth.accessToken,
    client: state.auth.client,
    expiry: state.auth.expiry,
    uid: state.auth.uid,
    userId: state.auth.userId,
    isLoading: state.accounts.isLoading,
    error: state.accounts.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreateAccount: (accountData, userId, authHeaders) => {
      dispatch(createAccount(accountData, userId, authHeaders));
    },
    onClearAccountState: () => {
      dispatch(clearAccountState());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm);

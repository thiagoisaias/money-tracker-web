import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { Redirect } from "react-router-dom";
import { signup } from "../../store/actions/auth";

const ErrorMessage = styled.p`
  color: #e75252;
  font-size: 14px;
  margin: 12px 1px;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  display: block;
  height: 40px;
  width: calc(100% - 12px);
  border: 1px solid #eee;
  border-radius: 3px;
  font-size: 14px;
  margin: 6px 0;
  padding-left: 12px;

  &:focus {
    border: 1px solid #d2d2d2;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  font-size: 12px;
  background-color: #333;
  cursor: pointer;
  border-radius: 3px;
  color: #fff;
  margin-top: 32px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 32px;
  font-size: 22px;
`;

const Alternate = styled.div`
  font-size: 12px;
  color: #333;
  margin-top: 32px;
  text-align: center;
  > strong {
    cursor: pointer;
    font-weight: 600;
  }
`;

export class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.isLoading) {
      return;
    }
    this.props.onSignup(this.state);
  };

  render() {
    const { toggleNewAccount, isAuthenticated, isLoading, error } = this.props;
    const authRedirect = <Redirect to="/" />;

    return (
      <Fragment>
        {isAuthenticated ? authRedirect : null}
        <Title>Create Account</Title>
        {error && <ErrorMessage> {error.full_messages[0]} </ErrorMessage>}
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm your password"
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
          />
          <SubmitButton onClick={this.handleSubmit}>
            {isLoading ? <Spinner width={35} height={35} /> : "Sign Up"}
          </SubmitButton>
        </Form>
        <Alternate>
          Already have an account?{" "}
          <strong onClick={toggleNewAccount}>Log in here </strong>
        </Alternate>
      </Fragment>
    );
  }
}

SignupForm.propTypes = {
  toggleNewAccount: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignup: signupData => {
      dispatch(signup(signupData));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

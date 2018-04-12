import React, { Component, Fragment } from "react";
import styled from "styled-components";

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

  &:hover {
    opacity: 0.9;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 32px;
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

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { someKey: "someValue" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleLogin() {}

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { toggleNewAccount } = this.props;
    return (
      <Fragment>
        <Title>Sign in</Title>
        <Form onSubmit={this.handleSubmit}>
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
          <SubmitButton onClick={this.handleLogin}> Log In </SubmitButton>
        </Form>
        <Alternate>
          Doesn´t have an account?{" "}
          <strong onClick={toggleNewAccount}>Sign up here </strong>
        </Alternate>
      </Fragment>
    );
  }
}

export default LoginForm;

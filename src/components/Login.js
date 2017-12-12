import React, { Component } from "react";
import styled from "styled-components";

// import moneyPig from '../img/money_pig.jpg';
// import moneyTravel from '../img/money_travel.jpg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #2d2d2d;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2em;
  color: #fff;
  margin-top: 55px;
`;

const Subtitle = styled.h2`
  text-align: center;
  font-size: 1.3em;
  font-weight: 300;
  color: #fff;
`;

const ImageContainer = styled.div`
  ${"" /* background: url(${moneyTravel}) center no-repeat; */} background-color: #484848;
  background-size: cover;
  color: #fff;
  width: 100%;
  height: 100%;
`;

const LoginForm = styled.form`
  height: 100%;
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoginInput = styled.input`
  display: block;
  height: 40px;
  width: 100%;
  max-width: 300px;
  padding-left: 16px;
  border: none;
  border-radius: 3px;
  margin: 8px 0;
  font-size: 14px;
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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

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

  handleLogin() {
    // props.history.replace("/");
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Title>Wallet</Title>
        <Subtitle>Say something</Subtitle>
        <LoginForm onSubmit={this.handleSubmit}>
          <LoginInput
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <LoginInput
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <SubmitButton onClick={this.handleLogin}> Log In </SubmitButton>
        </LoginForm>
      </Container>
    );
  }
}

export default Login;

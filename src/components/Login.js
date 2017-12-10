import React, { Component } from 'react';
import styled from 'styled-components';

// import moneyPig from '../img/money_pig.jpg';
// import moneyTravel from '../img/money_travel.jpg';

const Container = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const ImageContainer = styled.div`
  ${'' /* background: url(${moneyTravel}) center no-repeat; */}
  background-color: #484848;
  background-size: cover;
  color: #fff;
  width: 100%;
  height: 100%;
`;

const LoginForm = styled.form`
  width: 40vw;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #f2f2f2;
`;

const LoginInput = styled.input`
  display: block;
  width: 80%;
  margin: 8px auto;
`;


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

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

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <LoginForm onSubmit={this.handleSubmit}>
          <LoginInput type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          <LoginInput type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
          <LoginInput type="submit" value="Log in" />
        </LoginForm>
        <ImageContainer>
          <h2>Hello</h2>
          <p>Say Something</p>
        </ImageContainer>
      </Container>
    )
  }
}

export default Login;
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { devices } from "../../utils/devices";
import { connect } from "react-redux";

import image from "../../assets/images/welcome.jpg";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  padding: 0 88px;
  @media ${devices.mediumDown} {
    width: 100%;
    margin: 0 auto;
  }

  @media ${devices.largeUp} {
    width: 40%;
  }
`;

const PictureContainer = styled.div`
  color: #eee;
  position: relative;

  @media ${devices.mediumDown} {
    display: none;
  }

  @media ${devices.largeUp} {
    background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
      url(${image}) center no-repeat;
    background-size: cover;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const PictureTitle = styled.h2`
  font-size: 2.5em;
  letter-spacing: 1px;
  margin-bottom: 16px;
  font-weight: 600;
  margin-left: 55px;
`;

const PictureSubtitle = styled.p`
  font-size: 16px;
  color: #ddd;
  opacity: 0.9;
  margin-left: 57px;
`;

const PhotoCredit = styled.span`
  position: absolute;
  color: #ddd;
  font-size: 12px;
  bottom: 16px;
  right: 8px;
  cursor: default;
`;

export class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNewAccount: true
    };
  }

  toggleNewAccount = () => {
    if (this.props.isLoading) {
      return;
    }
    this.setState(prevState => {
      return {
        isNewAccount: !prevState.isNewAccount
      };
    });
  };

  render() {
    return (
      <Container>
        <FormContainer>
          {this.state.isNewAccount ? (
            <SignupForm toggleNewAccount={this.toggleNewAccount} />
          ) : (
            <LoginForm toggleNewAccount={this.toggleNewAccount} />
          )}
        </FormContainer>
        <PictureContainer>
          <PictureTitle>{"Welcome to Wallet"}</PictureTitle>
          <PictureSubtitle>
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
          </PictureSubtitle>
          <PhotoCredit>{"Photo by Romello Williams on Unsplash"}</PhotoCredit>
        </PictureContainer>
      </Container>
    );
  }
}

SignupPage.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading
  };
};

export default connect(mapStateToProps)(SignupPage);

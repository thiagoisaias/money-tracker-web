import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../../utils/devices";

import image from "../../../assets/images/welcome.jpg";
import LoginFormContainer from "../../../containers/Auth/Login/LoginFormContainer";
import SignupFormContainer from "../../../containers/Auth/Signup/SignupFormContainer";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  @media ${devices.mediumDown} {
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
    padding: 0 32px;
  }

  @media ${devices.largeUp} {
    width: 40%;
    max-width: 350px;
    margin: 0 auto;
    padding: 0 32px;
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

export const AuthPage = props => {
  return (
    <Container>
      <FormContainer>
        <Switch>
          <Route exact path="/auth/" component={SignupFormContainer} />
          <Route exact path="/auth/signup" component={SignupFormContainer} />
          <Route exact path="/auth/login" component={LoginFormContainer} />
        </Switch>
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
};

export default AuthPage;

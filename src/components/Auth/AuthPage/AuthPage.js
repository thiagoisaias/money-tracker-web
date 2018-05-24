import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  Wrapper,
  FormWrapper,
  PictureWrapper,
  PictureTitle,
  PictureSubtitle,
  PhotoCredit
} from "./styled";

import LoginContainer from "../Login/LoginContainer";
import SignupContainer from "../Signup/SignupContainer";

const AuthPage = props => {
  return (
    <Wrapper>
      <FormWrapper>
        <Switch>
          <Route exact path="/auth/" component={SignupContainer} />
          <Route exact path="/auth/signup" component={SignupContainer} />
          <Route exact path="/auth/login" component={LoginContainer} />
        </Switch>
      </FormWrapper>
      <PictureWrapper>
        <PictureTitle>{"Welcome to Wallet"}</PictureTitle>
        <PictureSubtitle>
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        </PictureSubtitle>
        <PhotoCredit>{"Photo by Romello Williams on Unsplash"}</PhotoCredit>
      </PictureWrapper>
    </Wrapper>
  );
};

export default AuthPage;

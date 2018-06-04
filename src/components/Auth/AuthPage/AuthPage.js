import React from "react";
import { Route, Switch } from "react-router-dom";

import { Wrapper, FormWrapper } from "./styled";

import LoginContainer from "../Login/Container";
import SignupContainer from "../Signup/Container";

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
    </Wrapper>
  );
};

export default AuthPage;

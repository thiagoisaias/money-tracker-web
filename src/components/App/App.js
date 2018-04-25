import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import SignupPage from "../SignupPage/SignupPage";
import TransactionForm from "../TransactionForm/TransactionForm";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/transaction" component={TransactionForm} />
        <Route component={SignupPage} />
      </Switch>
    );
  }
}

export default App;

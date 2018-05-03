import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import AccountList from "../Accounts/AccountList/AccountList";
import AccountForm from "../Accounts/AccountForm/AccountForm";
import Home from "../Home/Home";
import SignupPage from "../SignupPage/SignupPage";
import TransactionForm from "../Transactions/TransactionForm/TransactionForm";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/transaction" component={TransactionForm} />
        <Route exact path="/accounts" component={AccountList} />
        <Route exact path="/accounts/new" component={AccountForm} />
        <Route component={SignupPage} />
      </Switch>
    );
  }
}

export default App;

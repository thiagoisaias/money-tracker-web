import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import AccountFormContainer from "../../containers/Accounts/AccountForm/AccountFormContainer";
import AccountListContainer from "../../containers/Accounts/AccountList/AccountListContainer";
import Home from "../Home/Home";
import SignupPage from "../SignupPage/SignupPage";
import TransactionForm from "../Transactions/TransactionForm/TransactionForm";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={SignupPage} />
        <Route exact path="/transaction" component={TransactionForm} />
        <Route exact path="/accounts" component={AccountListContainer} />
        <Route exact path="/accounts/new" component={AccountFormContainer} />
      </Switch>
    );
  }
}

export default App;

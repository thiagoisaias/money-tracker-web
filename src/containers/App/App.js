import React from "react";
import { Route, Switch } from "react-router-dom";

import AccountFormContainer from "../Accounts/AccountForm/AccountFormContainer";
import AccountListContainer from "../Accounts/AccountList/AccountListContainer";
import Home from "../../components/Home/Home";
import SignupPage from "../../components/SignupPage/SignupPage";
import TransactionForm from "../../components/Transactions/TransactionForm/TransactionForm";

const App = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={SignupPage} />
      <Route exact path="/transaction" component={TransactionForm} />
      <Route exact path="/accounts" component={AccountListContainer} />
      <Route exact path="/accounts/new" component={AccountFormContainer} />
    </Switch>
  );
};

export default App;

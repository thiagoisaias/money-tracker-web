import React from "react";
import { Route, Switch } from "react-router-dom";

import AccountFormContainer from "../Accounts/AccountForm/AccountFormContainer";
import AccountListContainer from "../Accounts/AccountList/AccountListContainer";
import Home from "../../components/Home/Home";
import AuthPage from "../../components/Auth/AuthPage/AuthPage";
import TransactionForm from "../../components/Transactions/TransactionForm/TransactionForm";

const App = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={AuthPage} />
      <Route exact path="/transaction" component={TransactionForm} />
      <Route exact path="/accounts" component={AccountListContainer} />
      <Route exact path="/accounts/new" component={AccountFormContainer} />
      <Route exact path="/accounts/:id/edit" component={AccountFormContainer} />
    </Switch>
  );
};

export default App;

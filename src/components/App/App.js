import React from "react";
import { Route, Switch } from "react-router-dom";

import AccountFormContainer from "components/Accounts/Form/Container";
import AccountListContainer from "components/Accounts/List/Container";
import AuthPage from "components/Auth/AuthPage/AuthPage";
import CategoryFormContainer from "components/Categories/Form/Container";
import CategoryListContainer from "components/Categories/List/Container";
import Home from "components/Home/Home";
import NotFound from "components/NotFound/NotFound";
import TransactionForm from "components/Transactions/Form/Form";

const App = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={AuthPage} />
      <Route exact path="/accounts" component={AccountListContainer} />
      <Route exact path="/accounts/new" component={AccountFormContainer} />
      <Route exact path="/accounts/:id/edit" component={AccountFormContainer} />
      <Route exact path="/categories" component={CategoryListContainer} />
      <Route exact path="/categories/new" component={CategoryFormContainer} />
      <Route
        exact
        path="/categories/:id/edit"
        component={CategoryFormContainer}
      />
      <Route exact path="/transactions/new" component={TransactionForm} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;

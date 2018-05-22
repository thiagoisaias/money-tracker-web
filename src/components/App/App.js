import React from "react";
import { Route, Switch } from "react-router-dom";

import AccountFormContainer from "../../containers/Accounts/AccountForm/AccountFormContainer";
import AccountListContainer from "../../containers/Accounts/AccountList/AccountListContainer";
import AuthPage from "../Auth/AuthPage/AuthPage";
import CategoryFormContainer from "../../containers/Categories/CategoryForm/CategoryFormContainer";
import CategoryListContainer from "../../containers/Categories/CategoryList/CategoryListContainer";
import Home from "../Home/Home";
import TransactionForm from "../Transactions/TransactionForm/TransactionForm";

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
      <Route exact path="/transaction" component={TransactionForm} />
    </Switch>
  );
};

export default App;

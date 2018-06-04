import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";

import AccountFormContainer from "components/Accounts/Form/Container";
import AccountListContainer from "components/Accounts/List/Container";
import AuthPage from "components/Auth/AuthPage/AuthPage";
import CategoryFormContainer from "components/Categories/Form/Container";
import CategoryListContainer from "components/Categories/List/Container";
import Home from "components/Home/Home";
import NotFound from "components/NotFound/NotFound";
import NotificationContainer from "components/Notification/Container";
import TransactionFormContainer from "components/Transactions/Form/Container";

const App = props => {
  return (
    <Fragment>
      <NotificationContainer />
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={Home}
          isAuthenticated={props.isAuthenticated}
        />
        <Route path="/auth" component={AuthPage} />
        <PrivateRoute
          exact
          path="/accounts"
          component={AccountListContainer}
          isAuthenticated={props.isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/accounts/new"
          component={AccountFormContainer}
          isAuthenticated={props.isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/accounts/:id/edit"
          component={AccountFormContainer}
          isAuthenticated={props.isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/categories"
          component={CategoryListContainer}
          isAuthenticated={props.isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/categories/new"
          component={CategoryFormContainer}
          isAuthenticated={props.isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/categories/:id/edit"
          component={CategoryFormContainer}
          isAuthenticated={props.isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/transactions/new"
          component={TransactionFormContainer}
          isAuthenticated={props.isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/transactions/:id/edit"
          component={TransactionFormContainer}
          isAuthenticated={props.isAuthenticated}
        />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default App;

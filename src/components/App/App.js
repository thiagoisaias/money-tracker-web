import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import SignupPage from "../SignupPage/SignupPage";
import TransactionForm from "../TransactionForm/TransactionForm";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={SignupPage} />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/transaction" component={TransactionForm} />
        </Layout>
      </Switch>
    );
  }
}

export default App;

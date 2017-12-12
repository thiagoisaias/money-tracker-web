import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

import TransactionForm from "./components/TransactionForm";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/transaction" component={TransactionForm} />
        </Layout>
      </Switch>
    );
  }
}

export default App;

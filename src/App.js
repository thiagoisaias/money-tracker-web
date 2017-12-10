import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Layout from "./components/Layout";
import TransactionForm from "./components/TransactionForm";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/transaction" component={TransactionForm} />
        </Switch>
      </Layout>
    );
  }
}

export default App;

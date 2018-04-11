import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Welcome from "./Auth/Welcome";
import TransactionForm from "./TransactionForm";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Welcome} />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/transaction" component={TransactionForm} />
        </Layout>
      </Switch>
    );
  }
}

export default App;

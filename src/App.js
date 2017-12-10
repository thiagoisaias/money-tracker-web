import React, { Component, Fragment } from 'react';
import Home from './components/Home';

import Layout from './components/Layout';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;

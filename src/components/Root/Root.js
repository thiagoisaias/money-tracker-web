import React from "react";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import App from "../../containers/App/App";

const Root = props => {
  const { store, history } = props;
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object
};

export default Root;

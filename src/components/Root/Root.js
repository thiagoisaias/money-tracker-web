import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import App from "../../containers/App/App";

const Root = props => {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object
};

export default Root;

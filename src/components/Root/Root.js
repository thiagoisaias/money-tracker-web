import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import AppContainer from "components/App/Container";

const Root = props => {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;

import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import { createStore, applyMiddleware, compose } from "redux";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import createHistory from "history/createBrowserHistory";

import rootReducer from "./store/reducers/rootReducer";
import Root from "./containers/Root/Root";
import "./assets/index.css";

axios.defaults.baseURL = "https://money-management-api.herokuapp.com";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createHistory();
const router = routerMiddleware(history);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, router))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}

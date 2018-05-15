import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import createHistory from "history/createBrowserHistory";

import configureStore from "./configureStore";
import Root from "./components/Root/Root";
import "./assets/index.css";

axios.defaults.baseURL = "https://money-management-api.herokuapp.com/api/v1";

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById("root")
);

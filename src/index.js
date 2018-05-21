import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import configureStore from "./configureStore";
import Root from "./components/Root/Root";
import "./assets/index.css";

axios.defaults.baseURL = "https://money-management-api.herokuapp.com/api/v1";

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./components/Root/Root", () => {
    ReactDOM.render(<Root store={store} />, document.getElementById("root"));
  });
}

import { combineReducers } from "redux";
import accounts from "./accounts";
import auth from "./auth";
import transactions from "./transactions";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  auth,
  transactions,
  accounts,
  router: routerReducer
});

export default rootReducer;

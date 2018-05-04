import { combineReducers } from "redux";
import auth from "./auth";
import transactions from "./transactions";
import accounts from "./accounts";

const rootReducer = combineReducers({
  auth,
  transactions,
  accounts
});

export default rootReducer;

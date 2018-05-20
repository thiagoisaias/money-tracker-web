import { combineReducers } from "redux";
import accounts from "./accounts";
import auth from "./auth";
// import transactions from "./transactions";

const rootReducer = combineReducers({
  auth,
  // transactions,
  accounts
});

export default rootReducer;

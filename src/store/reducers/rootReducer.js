import { combineReducers } from "redux";
import accounts from "./accounts";
import auth from "./auth";
import categories from "./categories";
import transactions from "./transactions";

const rootReducer = combineReducers({
  auth,
  transactions,
  categories,
  accounts
});

export default rootReducer;

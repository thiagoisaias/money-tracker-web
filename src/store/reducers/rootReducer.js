import { combineReducers } from "redux";
import accounts from "./accounts";
import auth from "./auth";
import categories from "./categories";
import transactions from "./transactions";
import home from "./home";

const rootReducer = combineReducers({
  accounts,
  auth,
  categories,
  transactions,
  home
});

export default rootReducer;

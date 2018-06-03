import { combineReducers } from "redux";
import accounts from "./accounts";
import auth from "./auth";
import categories from "./categories";
import home from "./home";
import notifications from "./notifications";
import transactions from "./transactions";

const rootReducer = combineReducers({
  accounts,
  auth,
  categories,
  home,
  notifications,
  transactions
});

export default rootReducer;

import { combineReducers } from "redux";
import accounts from "./accounts";
import auth from "./auth";
import categories from "./categories";
import transactions from "./transactions";
import users from "./users";

const rootReducer = combineReducers({
  accounts,
  auth,
  categories,
  transactions,
  users
});

export default rootReducer;

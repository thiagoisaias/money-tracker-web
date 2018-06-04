import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import throttle from "lodash/throttle";

import rootReducer from "./reducers/rootReducer";
import { saveState, loadState } from "localStorage";

const configureStore = () => {
  const persistedState = { ...loadState() };

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
  );

  store.subscribe(
    throttle(() => {
      saveState(store.getState().auth);
    }, 1000)
  );

  return store;
};

export default configureStore;

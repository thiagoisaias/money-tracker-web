import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import throttle from "lodash/throttle";

import rootReducer from "./store/reducers/rootReducer";
import { saveAuthState, loadAuthState } from "./localStorage";

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const persistedState = { auth: loadAuthState() };

  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
  );

  store.subscribe(
    throttle(() => {
      saveAuthState(store.getState().auth);
    }, 1000)
  );

  return store;
};

export default configureStore;

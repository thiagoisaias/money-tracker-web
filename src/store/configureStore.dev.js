import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import throttle from "lodash/throttle";

import rootReducer from "./reducers/rootReducer";
import { saveState, loadState } from "localStorage";

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const persistedState = { ...loadState() };

  const logger = createLogger({
    collapsed: true
  });

  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk, logger))
  );

  store.subscribe(
    throttle(() => {
      saveState(store.getState().auth);
    }, 1000)
  );

  if (module.hot) {
    module.hot.accept("store/reducers/rootReducer", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;

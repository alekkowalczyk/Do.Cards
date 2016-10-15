import {
  createStore,
  applyMiddleware,
  compose,
} from "redux";
import { browserHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import { Store } from "../reducers";
import rootReducer from "../reducers/rootReducer";

const configureStore = (initialState: Store) =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...[routerMiddleware(browserHistory)])
    ));

export default configureStore;

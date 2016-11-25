import {
  createStore,
  applyMiddleware,
  compose,
} from "redux";
import { browserHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import { Store } from "../rootReducer";
import rootReducer from "../rootReducer";

const configureStore = (initialState: Store) =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...[routerMiddleware(browserHistory)])
    ));

export default configureStore;

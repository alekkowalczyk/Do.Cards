import {
  createStore,
  applyMiddleware,
} from "redux";
import { browserHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { Store } from "../rootReducer";
import rootReducer from "../rootReducer";
import cardSagas from "../../card/sagas";

function* rootSaga(): IterableIterator<any> {
  yield [
    cardSagas(),
  ];
};

const sagaMiddleware = createSagaMiddleware();
const configureStore = (initialState: Store) => {
  const store = createStore(
                    rootReducer,
                    initialState,
                    applyMiddleware(sagaMiddleware,
                        routerMiddleware(browserHistory)));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;

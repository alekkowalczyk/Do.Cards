"use strict";
const redux_1 = require("redux");
const react_router_1 = require("react-router");
const react_router_redux_1 = require("react-router-redux");
const redux_saga_1 = require("redux-saga");
const rootReducer_1 = require("../rootReducer");
const sagas_1 = require("../../card/sagas");
function* rootSaga() {
    yield [
        sagas_1.default(),
    ];
}
;
const sagaMiddleware = redux_saga_1.default();
const configureStore = (initialState) => {
    const store = redux_1.createStore(rootReducer_1.default, initialState, redux_1.applyMiddleware(sagaMiddleware, react_router_redux_1.routerMiddleware(react_router_1.browserHistory)));
    sagaMiddleware.run(rootSaga);
    return store;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
//# sourceMappingURL=configureStore.js.map
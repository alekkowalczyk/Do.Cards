"use strict";
const redux_1 = require("redux");
const react_router_1 = require("react-router");
const react_router_redux_1 = require("react-router-redux");
const rootReducer_1 = require("../reducers/rootReducer");
const configureStore = (initialState) => redux_1.createStore(rootReducer_1.default, initialState, redux_1.compose(redux_1.applyMiddleware(...[react_router_redux_1.routerMiddleware(react_router_1.browserHistory)])));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
//# sourceMappingURL=configureStore.js.map
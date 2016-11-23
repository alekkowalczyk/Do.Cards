"use strict";
const redux_1 = require("redux");
const react_router_redux_1 = require("react-router-redux");
const cardGroupReducer_1 = require("./cardGroupReducer");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    cardGroup: cardGroupReducer_1.default,
    routing: react_router_redux_1.routerReducer,
});
//# sourceMappingURL=rootReducer.js.map
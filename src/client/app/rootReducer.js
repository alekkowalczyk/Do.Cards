"use strict";
const redux_1 = require("redux");
const react_router_redux_1 = require("react-router-redux");
const rootCardsReducer_1 = require("../card/reducers/rootCardsReducer");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    cardsRoot: rootCardsReducer_1.default,
    routing: react_router_redux_1.routerReducer,
});
//# sourceMappingURL=rootReducer.js.map
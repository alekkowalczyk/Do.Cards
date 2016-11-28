"use strict";
const redux_1 = require("redux");
const react_router_redux_1 = require("react-router-redux");
const cardGroupReducer_1 = require("../card/reducers/cardGroupReducer");
const cardsReducer_1 = require("../card/reducers/cardsReducer");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    cardGroups: cardGroupReducer_1.default,
    cards: cardsReducer_1.default,
    routing: react_router_redux_1.routerReducer,
});
//# sourceMappingURL=rootReducer.js.map
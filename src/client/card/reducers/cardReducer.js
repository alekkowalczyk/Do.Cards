"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const actions_1 = require("../actions");
const cardReducer = (state, action) => {
    if (action.type !== actions_1.CardActionConstants.CARD_ACTION) {
        return state;
    }
    switch (action.subType) {
        case actions_1.CardActionConstants.CHANGE_CARD_TITLE:
            return __assign({}, state, { title: action.title });
        default:
            return state;
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cardReducer;
//# sourceMappingURL=cardReducer.js.map
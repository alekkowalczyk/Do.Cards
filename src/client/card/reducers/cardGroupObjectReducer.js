"use strict";
const actions_1 = require("../actions");
const cardReducer = (state, action) => {
    if (action.type !== actions_1.CardGroupActionConstants.CARDGROUP_ACTION) {
        return state;
    }
    switch (action.subType) {
        case actions_1.CardGroupActionConstants.CHANGE_CARDGROUP_TITLE:
            return Object.assign({}, state, { title: action.title });
        default:
            return state;
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cardReducer;
//# sourceMappingURL=cardGroupObjectReducer.js.map
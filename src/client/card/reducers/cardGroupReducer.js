"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const common_1 = require("../../common");
const actions_1 = require("../actions");
const cardReducer_1 = require("./cardReducer");
const INITIAL_STATE = { cards: [] };
let cardId = 0;
const cardGroupReducer = (state = INITIAL_STATE, action = common_1.OtherAction) => {
    switch (action.type) {
        case actions_1.CardGroupActionConstants.ADD_CARD:
            return __assign({}, state, { cards: [
                    ...state.cards,
                    {
                        id: (cardId++).toString(),
                        title: action.title,
                        status: "OK",
                    },
                ] });
        case actions_1.CardGroupActionConstants.ARCHIVE_CARD:
            const cardToArchive = state.cards.find(c => c.id === action.id);
            if (cardToArchive) {
                const idxToRemove = state.cards.indexOf(cardToArchive);
                if (idxToRemove > -1) {
                    return __assign({}, state, { cards: [
                            ...state.cards.slice(0, idxToRemove),
                            ...state.cards.slice(idxToRemove + 1),
                        ] });
                }
            }
            ;
            return state;
        case actions_1.CardActionConstants.CARD_ACTION:
            const cardToEdit = state.cards.find(c => c.id === action.id);
            if (cardToEdit) {
                const idxToRemove = state.cards.indexOf(cardToEdit);
                if (idxToRemove > -1) {
                    return __assign({}, state, { cards: [
                            ...state.cards.slice(0, idxToRemove),
                            cardReducer_1.default(cardToEdit, action),
                            ...state.cards.slice(idxToRemove + 1),
                        ] });
                }
            }
            return state;
        default:
            return state;
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cardGroupReducer;
//# sourceMappingURL=cardGroupReducer.js.map
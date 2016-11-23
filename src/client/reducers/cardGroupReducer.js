"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const constants_1 = require("../constants");
const card_1 = require("../constants/card");
const INITIAL_STATE = { cards: [] };
let cardId = 0;
const cardGroupReducer = (state = INITIAL_STATE, action = constants_1.OtherAction) => {
    switch (action.type) {
        case card_1.Constants.ADD_CARD:
            return __assign({}, state, { cards: [
                    ...state.cards,
                    {
                        id: (cardId++).toString(),
                        title: action.title,
                        status: "OK",
                    },
                ] });
        case card_1.Constants.ARCHIVE_CARD:
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
        case card_1.Constants.EDIT_CARD_TITLE:
            const cardToEdit = state.cards.find(c => c.id === action.id);
            if (cardToEdit) {
                const idxToRemove = state.cards.indexOf(cardToEdit);
                if (idxToRemove > -1) {
                    return __assign({}, state, { cards: [
                            ...state.cards.slice(0, idxToRemove),
                            __assign({}, cardToEdit, { title: action.title }),
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
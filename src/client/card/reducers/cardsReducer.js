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
const cardObjectReducer_1 = require("./cardObjectReducer");
let cardId = 0;
const INITIAL_STATE = [];
const cardListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions_1.CardActionConstants.ADD_CARD:
            return [
                ...state,
                {
                    id: {
                        id: (cardId++).toString(),
                        parentId: action.parentId,
                        parentType: action.parentType,
                    },
                    title: action.title,
                    status: "OK",
                },
            ];
        case actions_1.CardActionConstants.ARCHIVE_CARD:
            const cardToArchive = state.find(c => c.id === action.id);
            if (cardToArchive) {
                const idxToRemove = state.indexOf(cardToArchive);
                if (idxToRemove > -1) {
                    return [
                        ...state.slice(0, idxToRemove),
                        ...state.slice(idxToRemove + 1),
                    ];
                }
            }
            ;
            return state;
        case actions_1.CardActionConstants.CARD_ACTION:
            if (action.id.id === "-1") {
                action.id = __assign({}, action.id, { id: (cardId++).toString() });
                const newCard = {
                    id: action.id,
                    title: "",
                    status: "Empty",
                };
                return [
                    ...state,
                    cardObjectReducer_1.default(newCard, action),
                ];
            }
            const cardToEdit = state.find(c => c.id === action.id);
            if (cardToEdit) {
                const idxToEdit = state.indexOf(cardToEdit);
                if (idxToEdit > -1) {
                    return [
                        ...state.slice(0, idxToEdit),
                        cardObjectReducer_1.default(cardToEdit, action),
                        ...state.slice(idxToEdit + 1),
                    ];
                }
            }
            return state;
        default:
            return state;
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cardListReducer;
//# sourceMappingURL=cardsReducer.js.map
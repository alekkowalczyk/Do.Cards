"use strict";
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
                    id: (cardId++).toString(),
                    cardGroupId: action.cardGroupId,
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
            const cardToEdit = state.find(c => c.id === action.id);
            if (cardToEdit) {
                const idxToRemove = state.indexOf(cardToEdit);
                if (idxToRemove > -1) {
                    return [
                        ...state.slice(0, idxToRemove),
                        cardObjectReducer_1.default(cardToEdit, action),
                        ...state.slice(idxToRemove + 1),
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
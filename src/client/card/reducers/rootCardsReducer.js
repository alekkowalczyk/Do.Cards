"use strict";
const common_1 = require("../../common");
const cardsReducer_1 = require("./cardsReducer");
const cardGroupsReducer_1 = require("./cardGroupsReducer");
const INITIAL_STATE = {
    cards: [],
    //cardGroups: [getDefaultEmptyCardGroup()],
    cardGroups: [],
};
exports.INITIAL_STATE = INITIAL_STATE;
const rootCardsReducer = (state = INITIAL_STATE, action = common_1.OtherAction) => {
    const reducedState = {
        cards: cardsReducer_1.default(state.cards, action),
        cardGroups: cardGroupsReducer_1.default(state.cardGroups, action),
    };
    return reducedState;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rootCardsReducer;
//# sourceMappingURL=rootCardsReducer.js.map
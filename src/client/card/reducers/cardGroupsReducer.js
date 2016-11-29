"use strict";
const common_1 = require("../../common");
const actions_1 = require("../actions");
const cardGroupObjectReducer_1 = require("./cardGroupObjectReducer");
let cardGroupId = 0;
const INITIAL_STATE = [];
const cardGroupsReducer = (state = INITIAL_STATE, action = common_1.OtherAction) => {
    switch (action.type) {
        case actions_1.CardGroupActionConstants.ADD_CARDGROUP:
            return [
                ...state,
                {
                    id: (cardGroupId++).toString(),
                    title: action.title,
                    status: "OK",
                },
            ];
        case actions_1.CardGroupActionConstants.ARCHIVE_CARDGROUP:
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
        case actions_1.CardGroupActionConstants.CARDGROUP_ACTION:
            const cardGroupToEdit = state.find(c => c.id === action.id);
            if (cardGroupToEdit) {
                const idxToRemove = state.indexOf(cardGroupToEdit);
                if (idxToRemove > -1) {
                    return [
                        ...state.slice(0, idxToRemove),
                        cardGroupObjectReducer_1.default(cardGroupToEdit, action),
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
exports.default = cardGroupsReducer;
//# sourceMappingURL=cardGroupsReducer.js.map
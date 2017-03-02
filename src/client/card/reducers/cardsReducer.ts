import { OtherAction } from "../../common";
import { CardActionDefs, CardActionConstants } from "../actions";
import { CardModel } from "../model";
import cardObjectReducer from "./cardObjectReducer";

type CardAction =
    CardActionDefs.ArchiveCardAction |
    CardActionDefs.CardAction |
    CardActionDefs.DisplayEmptyCardAboveAction |
    CardActionDefs.DisplayEmptyCardAtBottom |
    OtherAction;

let cardId = 0;
const INITIAL_STATE: CardModel[] = [];

const cardListReducer = (state: CardModel[] = INITIAL_STATE, action: CardAction): CardModel[] => {
    console.log("cardListReducer", state);
    switch (action.type) {
            case CardActionConstants.ARCHIVE_CARD:
                const cardToArchive = state.find(c => c.id === action.id);
                if (cardToArchive) {
                    const idxToRemove = state.indexOf(cardToArchive);
                    if (idxToRemove > -1) {
                        return [
                                ...state.slice(0, idxToRemove),
                                ...state.slice(idxToRemove + 1),
                            ];
                    }
                };
                return state;
            case CardActionConstants.DISPLAY_EMPTY_CARD_ABOVE:
                return state.map(c => {
                    if (c.id === action.id) {
                        return new CardModel({
                            ...c,
                            ui: {
                                ...c.ui,
                                displayEmptyCardAbove: true,
                            },
                        });
                    }
                    if (c.ui.displayEmptyCardAbove === true
                            && c.id.id !== action.id.id
                            && c.id.parentId === action.id.parentId
                            && c.id.parentType === action.id.parentType) {
                        return new CardModel({
                            ...c,
                            ui: {
                                ...c.ui,
                                displayEmptyCardAbove: false,
                            },
                        });
                    }
                    return c;
                });
            case CardActionConstants.DISPLAY_EMPTY_AT_BOTTOM:
                const cardToResetFlag = state.find(c => c.ui.displayEmptyCardAbove === true
                            && c.id.parentId === action.parentId
                            && c.id.parentType === action.parentType);
                if (cardToResetFlag) {
                    const idxOfCardToResetFlag = state.indexOf(cardToResetFlag);
                    const cardWithFlagFalse = new CardModel({
                        ...cardToResetFlag,
                        ui: {
                            ...cardToResetFlag.ui,
                            displayEmptyCardAbove: false,
                        },
                    });
                    return [
                        ...state.slice(0, idxOfCardToResetFlag),
                        cardWithFlagFalse,
                        ...state.slice(idxOfCardToResetFlag + 1),
                    ];
                }
                return state;
            case CardActionConstants.CARD_ACTION:
                if (action.id.id === "-1") {
                    const idxCardToDisplayEmptyAbove = state.findIndex(c => c.ui.displayEmptyCardAbove === true
                                                    && c.id.parentId === action.id.parentId
                                                    && c.id.parentType === action.id.parentType);
                    action.id = {
                        ...action.id,
                        id: (cardId++).toString(),
                    };
                    if (idxCardToDisplayEmptyAbove > -1) {
                        const cardsBefore = state.slice(0, idxCardToDisplayEmptyAbove);
                        state = [
                                ...cardsBefore,
                                CardModel.GetEmpty({id: action.id, order: cardsBefore.length}),
                                ...state.slice(idxCardToDisplayEmptyAbove).map(c => c.ChangeOrder(c.order + 1)),
                            ];
                    } else {
                        state = [
                                    ...state,
                                    CardModel.GetEmpty({id: action.id, order: state.length}),
                                ];
                    }
                }
                const cardToEdit = state.find(c => c.id === action.id);
                if (cardToEdit) {
                    const idxToEdit = state.indexOf(cardToEdit);
                    if (idxToEdit > -1) {
                        return [
                                ...state.slice(0, idxToEdit),
                                cardObjectReducer(cardToEdit, <any>action),
                                ...state.slice(idxToEdit + 1),
                            ];
                    }
                }
                return state;
            default:
                return state;
        }
};

export default cardListReducer;

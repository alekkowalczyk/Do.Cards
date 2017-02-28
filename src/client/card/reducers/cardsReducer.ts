import { OtherAction } from "../../common";
import { CardActionDefs, CardActionConstants } from "../actions";
import { ICardModel } from "../model";
import cardObjectReducer from "./cardObjectReducer";

type CardAction =
    CardActionDefs.AddCardAction |
    CardActionDefs.ArchiveCardAction |
    CardActionDefs.CardAction |
    CardActionDefs.DisplayEmptyCardAboveAction |
    OtherAction;

let cardId = 0;
const INITIAL_STATE: ICardModel[] = [];

const cardListReducer = (state: ICardModel[] = INITIAL_STATE, action: CardAction): ICardModel[] => {
    switch (action.type) {
            case CardActionConstants.ADD_CARD:
                return [
                        ...state,
                        {
                            id: {
                                id: (cardId++).toString(),
                                parentId: action.parentId,
                                parentType: action.parentType,
                            },
                            ui: {},
                            title: action.title,
                            status: "OK",
                        },
                    ];
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
                const cardToDisplayEmptyAbove = state.find(c => c.id === action.id);
                const cardToResetFlag = state.find(c => c.ui.displayEmptyCardAbove === true
                                                    && c.id.parentId === action.id.parentId
                                                    && c.id.parentType === action.id.parentType);
                if (cardToDisplayEmptyAbove) {
                    const cardWithFlagTrue: ICardModel = {
                            ...cardToDisplayEmptyAbove,
                            ui: {
                                ...cardToDisplayEmptyAbove.ui,
                                displayEmptyCardAbove: true,
                            },
                        };
                    const idxOfCardToDisplayEmptyAbove = state.indexOf(cardToDisplayEmptyAbove);
                    let retState = [
                                ...state.slice(0, idxOfCardToDisplayEmptyAbove),
                                cardWithFlagTrue,
                                ...state.slice(idxOfCardToDisplayEmptyAbove + 1),
                            ];
                    if (cardToResetFlag) {
                        const idxOfCardToResetFlag = state.indexOf(cardToResetFlag);
                        const cardWithFlagFalse = {
                            ...cardToResetFlag,
                            ui: {
                                ...cardToResetFlag.ui,
                                displayEmptyCardAbove: false,
                            },
                        };
                        retState = [
                            ...retState.slice(0, idxOfCardToResetFlag),
                            cardWithFlagFalse,
                            ...retState.slice(idxOfCardToResetFlag + 1),
                        ];
                    }
                    return retState;
                }
                return state;
            case CardActionConstants.CARD_ACTION:
                if (action.id.id === "-1") {
                    action.id = {
                        ...action.id,
                        id: (cardId++).toString(),
                    };
                    const newCard: ICardModel = {
                        id: action.id,
                        ui: {},
                        title: "",
                        status: "Empty",
                    };
                    return [
                                ...state,
                                cardObjectReducer(newCard, <any>action),
                            ];
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

import { OtherAction } from "../../common";
import { CardActionDefs, CardActionConstants } from "../actions";
import { CardModel } from "../model";
import cardObjectReducer from "./cardObjectReducer";

type CardAction =
    CardActionDefs.ArchiveCardAction |
    CardActionDefs.CardAction |
    CardActionDefs.DisplayEmptyCardAboveAction |
    CardActionDefs.DisplayEmptyCardAtBottom |
    CardActionDefs.MoveCardAction |
    OtherAction;

let cardId = 0;
const INITIAL_STATE: CardModel[] = [];

const cardListReducer = (state: CardModel[] = INITIAL_STATE, action: CardAction): CardModel[] => {
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
                            && c.IsSameCardListAsId(action.id)) {
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
                            && c.IsSameCardListForParent(action.parentId, action.parentType));
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
            case CardActionConstants.MOVE_CARD:
                const cardToMove = state.find(c => c.id === action.id);
                if (cardToMove) {
                    const movedCard = cardToMove.ChangeOrderAndParent(action.order, action.parentId, action.parentType);
                    return state.map(c => {
                        if (c.id === cardToMove.id) {
                            return movedCard;
                        } else if (c.IsSameCardListAsId(cardToMove.id) && !cardToMove.IsSameCardListAsId(movedCard.id)) {
                            // We moved the card to a different parent, and this is a card from the "old" parent.
                            // So there is a gap in order which we need to close
                            if (c.order > cardToMove.order) {
                                return c.ChangeOrder(c.order - 1);
                            }
                        } else if (c.IsSameCardListAsId(movedCard.id) && cardToMove.IsSameCardListAsId(movedCard.id)) {
                            // Card from current parent, moving card within one parent
                            if (c.order >= movedCard.order && c.order < cardToMove.order) { // If moved "backward" - items between old place and new place need the order to be increased
                                return c.ChangeOrder(c.order + 1);                          // If moved "forward" - always false
                            } else if (c.order >= cardToMove.order && c.order <= movedCard.order) { // If moved "backward" - always false
                                return c.ChangeOrder(c.order - 1);                                // If moved "forward" - items between old place and new place need the order to be decreases
                            }
                        } else if (c.IsSameCardListAsId(movedCard.id) && !cardToMove.IsSameCardListAsId(movedCard.id)) {
                            // Card from current parent, moving card from another parent
                            if (c.order >= movedCard.order) {
                                return c.ChangeOrder(c.order + 1);
                            }
                        }
                        return c;
                    });
                }
                return state;
            case CardActionConstants.CARD_ACTION:
                if (action.id.id === "-1") {
                    const cardToDisplayEmptyAbove = state.find(c => c.ui.displayEmptyCardAbove === true
                                                    && c.IsSameCardListAsId(action.id));
                    action.id = {
                        ...action.id,
                        id: (cardId++).toString(),
                    };
                    const newCardOrder: number = cardToDisplayEmptyAbove
                                            ? cardToDisplayEmptyAbove.order
                                            : state.filter(c => c.IsSameCardListAsId(action.id)).length;
                    const newCard = CardModel.GetEmpty({id: action.id, order: newCardOrder});
                    return [
                        ...state.map(c => {
                            if (c.order >= newCardOrder
                                && c.IsSameCardListAsId(action.id)) {
                                    return c.ChangeOrder(c.order + 1);
                                }
                            return c;
                        }),
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

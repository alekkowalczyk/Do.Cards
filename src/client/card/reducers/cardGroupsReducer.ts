import { OtherAction } from "../../common";
import { CardGroupActionDefs, CardGroupActionConstants } from "../actions";
import { CardGroupModel } from "../model";
import cardGroupObjectReducer from "./cardGroupObjectReducer";

type CardGroupAction =
    CardGroupActionDefs.AddCardGroupAction |
    CardGroupActionDefs.ArchiveCardGroupAction |
    CardGroupActionDefs.CardGroupAction |
    CardGroupActionDefs.MoveCardGroupAction |
    OtherAction;

let cardGroupId = 0;
const INITIAL_STATE: CardGroupModel[] = [];

const cardGroupsReducer = (state: CardGroupModel[] = INITIAL_STATE, action: CardGroupAction = OtherAction): CardGroupModel[] => {
    switch (action.type) {
            case CardGroupActionConstants.ADD_CARDGROUP:
                return [
                        ...state,
                        new CardGroupModel({
                            id: (cardGroupId++).toString(),
                            order: cardGroupId,
                            ui: {},
                            title: action.title,
                            parentId: action.parentId,
                            status: "OK",
                        }),
                    ];
            case CardGroupActionConstants.ARCHIVE_CARDGROUP:
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
            case CardGroupActionConstants.CARDGROUP_ACTION:
                if (action.id === "-1") {
                    action.id = (cardGroupId++).toString();
                    const newCardGroup: CardGroupModel = CardGroupModel.GetEmpty({id: action.id, order: cardGroupId});
                    return [
                                ...state,
                                cardGroupObjectReducer(newCardGroup, <any>action),
                            ];
                }
                const cardGroupToEdit = state.find(c => c.id === action.id);
                if (cardGroupToEdit) {
                    const idxToRemove = state.indexOf(cardGroupToEdit);
                    if (idxToRemove > -1) {
                        return [
                                ...state.slice(0, idxToRemove),
                                cardGroupObjectReducer(cardGroupToEdit, <any>action),
                                ...state.slice(idxToRemove + 1),
                            ];
                    }
                }
                return state;
            case CardGroupActionConstants.MOVE_CARDGROUP:
                const cardToMove = state.find(c => c.id === action.id);
                if (cardToMove) {
                    const movedCard = cardToMove.ChangeOrderAndParent(action.order, action.parentId);
                    return state.map(c => {
                        if (c.id === cardToMove.id) {
                            return movedCard;
                        } else if (c.IsSameParent(cardToMove.id) && !cardToMove.IsSameParent(movedCard.id)) {
                            // We moved the card to a different parent, and this is a card from the "old" parent.
                            // So there is a gap in order which we need to close
                            if (c.order > cardToMove.order) {
                                return c.ChangeOrder(c.order - 1);
                            }
                        } else if (c.IsSameParent(movedCard.id) && cardToMove.IsSameParent(movedCard.id)) {
                            // Card from current parent, moving card within one parent
                            if (c.order >= movedCard.order && c.order < cardToMove.order) { // If moved "backward" - items between old place and new place need the order to be increased
                                return c.ChangeOrder(c.order + 1);                          // If moved "forward" - always false
                            } else if (c.order >= cardToMove.order && c.order <= movedCard.order) { // If moved "backward" - always false
                                return c.ChangeOrder(c.order - 1);                                // If moved "forward" - items between old place and new place need the order to be decreases
                            }
                        } else if (c.IsSameParent(movedCard.id) && !cardToMove.IsSameParent(movedCard.id)) {
                            // Card from current parent, moving card from another parent
                            if (c.order >= movedCard.order) {
                                return c.ChangeOrder(c.order + 1);
                            }
                        }
                        return c;
                    });
                }
                return state;
            default:
                return state;
        }
};

export default cardGroupsReducer;

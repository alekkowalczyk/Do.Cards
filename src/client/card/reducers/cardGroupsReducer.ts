import { OtherAction } from "../../common";
import { CardGroupActionDefs, CardGroupActionConstants } from "../actions";
import { CardGroupModel } from "../model";
import cardGroupObjectReducer from "./cardGroupObjectReducer";

type CardGroupAction =
    CardGroupActionDefs.AddCardGroupAction |
    CardGroupActionDefs.ArchiveCardGroupAction |
    CardGroupActionDefs.CardGroupAction |
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
            default:
                return state;
        }
};

export default cardGroupsReducer;

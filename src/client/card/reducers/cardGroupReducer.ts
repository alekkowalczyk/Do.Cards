import { OtherAction } from "../../common";
import { CardGroupActionDefs, CardGroupActionConstants } from "../actions";
import { ICardGroupModel } from "../model";
import cardGroupObjectReducer from "./cardGroupObjectReducer";

type CardGroupAction =
    CardGroupActionDefs.AddCardGroupAction |
    CardGroupActionDefs.ArchiveCardGroupAction |
    CardGroupActionDefs.CardGroupAction |
    OtherAction;

let cardGroupId = 0;
const INITIAL_STATE: ICardGroupModel[] = [];

const cardGroupReducer = (state: ICardGroupModel[] = INITIAL_STATE, action: CardGroupAction = OtherAction): ICardGroupModel[] => {
    switch (action.type) {
            case CardGroupActionConstants.ADD_CARDGROUP:
                return [
                        ...state,
                        {
                            id: (cardGroupId++).toString(),
                            title: action.title,
                            status: "OK",
                        },
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

export default cardGroupReducer;

import { OtherAction } from "../../common";
import { CardActionDefs, CardActionConstants } from "../actions";
import { ICardModel } from "../model";
import cardObjectReducer from "./cardObjectReducer";

type CardAction =
    CardActionDefs.AddCardAction |
    CardActionDefs.ArchiveCardAction |
    CardActionDefs.CardAction |
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
            case CardActionConstants.CARD_ACTION:
                if (action.id.id === "-1") {
                    action.id = {
                        ...action.id,
                        id: (cardId++).toString(),
                    };
                    const newCard: ICardModel = {
                        id: action.id,
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

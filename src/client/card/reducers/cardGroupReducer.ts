import { OtherAction } from "../../common";
import { CardGroupActionDefs, CardGroupActionConstants, CardActionDefs, CardActionConstants } from "../actions";
import { ICardGroupModel } from "../model";
import cardReducer from "./cardReducer";

type CardAction =
    CardGroupActionDefs.AddCardAction |
    CardGroupActionDefs.ArchiveCardAction |
    CardActionDefs.CardAction |
    OtherAction;

const INITIAL_STATE: ICardGroupModel = { cards: [] };
let cardId = 0;

const cardGroupReducer = (state: ICardGroupModel = INITIAL_STATE, action: CardAction = OtherAction): ICardGroupModel => {
    switch (action.type) {
        case CardGroupActionConstants.ADD_CARD:
            return {
                ...state,
                cards: [
                    ...state.cards,
                    {
                        id: (cardId++).toString(),
                        title: action.title,
                        status: "OK",
                    },
                ],
            };
        case CardGroupActionConstants.ARCHIVE_CARD:
            const cardToArchive = state.cards.find(c => c.id === action.id);
            if (cardToArchive) {
                const idxToRemove = state.cards.indexOf(cardToArchive);
                if (idxToRemove > -1) {
                    return {
                        ...state,
                        cards: [
                            ...state.cards.slice(0, idxToRemove),
                            ...state.cards.slice(idxToRemove + 1),
                        ],
                    };
                }
            };
            return state;
        case CardActionConstants.CARD_ACTION:
            const cardToEdit = state.cards.find(c => c.id === action.id);
            if (cardToEdit) {
                const idxToRemove = state.cards.indexOf(cardToEdit);
                if (idxToRemove > -1) {
                    return {
                        ...state,
                        cards: [
                            ...state.cards.slice(0, idxToRemove),
                            cardReducer(cardToEdit, <any>action),
                            ...state.cards.slice(idxToRemove + 1),
                        ],
                    };
                }
            }
            return state;
        default:
            return state;
    }
};

export default cardGroupReducer;

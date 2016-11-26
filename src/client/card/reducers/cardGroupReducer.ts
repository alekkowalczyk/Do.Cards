import { OtherAction } from "../../common";
import { ActionDefs, ActionConstants } from "../actions";
import { ICardGroupModel } from "../model";

type CardAction =
    ActionDefs.AddCardAction |
    ActionDefs.ArchiveCardAction |
    ActionDefs.ChangeCardTitleAction |
    OtherAction;

const INITIAL_STATE: ICardGroupModel = { cards: [] };
let cardId = 0;

const cardGroupReducer = (state: ICardGroupModel = INITIAL_STATE, action: CardAction = OtherAction): ICardGroupModel => {
    switch (action.type) {
        case ActionConstants.ADD_CARD:
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
        case ActionConstants.ARCHIVE_CARD:
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
        case ActionConstants.CHANGE_CARD_TITLE:
            const cardToEdit = state.cards.find(c => c.id === action.id);
            if (cardToEdit) {
                const idxToRemove = state.cards.indexOf(cardToEdit);
                if (idxToRemove > -1) {
                    return {
                        ...state,
                        cards: [
                            ...state.cards.slice(0, idxToRemove),
                            {
                                ...cardToEdit,
                                title: action.title,
                            },
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

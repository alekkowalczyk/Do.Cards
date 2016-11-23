import { OtherAction } from "../constants";
import { ActionDefs } from "../constants/card";
import { ICardGroupModel, ICardModel } from "../model/card";
import { Constants as CardConstants } from "../constants/card";

type CardAction =
    ActionDefs.AddCardAction |
    ActionDefs.ArchiveCardAction |
    ActionDefs.EditCardTitleAction |
    OtherAction;

const INITIAL_STATE: ICardGroupModel = { cards: [] };

const cardGroupReducer = (state: ICardGroupModel = INITIAL_STATE, action: CardAction = OtherAction): ICardGroupModel => {
    switch (action.type) {
        case CardConstants.ADD_CARD:
            return Object.assign({}, state, {
                cards: [
                    ...state.cards,
                    {
                        id: "123",
                        title: action.title,
                        state: "OK",
                    }
                ],
            });
        case CardConstants.ARCHIVE_CARD:
            const cardToArchive = state.cards.find(c => c.id === action.id);
            if (cardToArchive) {
                const idxToRemove = state.cards.indexOf(cardToArchive);
                if (idxToRemove > -1) {
                    return Object.assign({}, state, {
                        cards: [
                            ...state.cards.slice(0, idxToRemove),
                            ...state.cards.slice(idxToRemove),
                        ],
                    });
                }
            };
            return state;
        case CardConstants.EDIT_CARD_TITLE:
            const cardToEdit = state.cards.find(c => c.id === action.id);
            if (cardToEdit) {
                const idxToRemove = state.cards.indexOf(cardToEdit);
                if (idxToRemove > -1) {
                    return Object.assign({}, state, {
                        cards: [
                            ...state.cards.slice(0, idxToRemove),
                            Object.assign({}, cardToEdit, {
                                title: action.title,
                            }),
                            ...state.cards.slice(idxToRemove),
                        ],
                    });
                }
            }
            return state;
        default:
            return state;
    }
};

export default cardGroupReducer;

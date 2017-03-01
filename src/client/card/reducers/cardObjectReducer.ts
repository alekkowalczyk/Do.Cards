import { OtherAction } from "../../common";
import { CardActionDefs, CardActionConstants } from "../actions";
import { ICardProps, CardModel } from "../model";

type CardAction =
    CardActionDefs.CardTitleChangedAction |
    CardActionDefs.ChangeCardTitleAction |
    OtherAction;

/**
 * 
 * @param state 
 * card to perform action on
 * @param cardsList 
 * list of all cards, if we want to perform an action on some different card, e.g. to reset the state
 * @param action 
 * the action itself
 */
const cardReducer = (state: CardModel, cardsList: CardModel[], action: CardAction): CardModel[] => {
    if (action.type !== CardActionConstants.CARD_ACTION) { return [ state ]; }
    switch (action.subType) {
        case CardActionConstants.CHANGE_CARD_TITLE:
            return [ new CardModel({
                        ...state,
                        title: action.title,
                })];
        case CardActionConstants.DISPLAY_EMPTY_SUB_CARD:
            return [ new CardModel({
                    ...state,
                    ui: {
                        ...state.ui,
                        displayAddSubCard: true,
                    },
                })];
        default:
            return [ state ];
    }
};

export default cardReducer;

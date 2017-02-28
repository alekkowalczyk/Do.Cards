import { OtherAction } from "../../common";
import { CardActionDefs, CardActionConstants } from "../actions";
import { ICardProps, CardModel } from "../model";

type CardAction =
    CardActionDefs.CardTitleChangedAction |
    CardActionDefs.ChangeCardTitleAction |
    OtherAction;

const cardReducer = (state: CardModel, action: CardAction): CardModel => {
    if (action.type !== CardActionConstants.CARD_ACTION) { return state; }
    switch (action.subType) {
        case CardActionConstants.CHANGE_CARD_TITLE:
            return new CardModel({
                    ...state,
                    title: action.title,
            });
        case CardActionConstants.DISPLAY_EMPTY_SUB_CARD:
            return new CardModel({
                ...state,
                ui: {
                    ...state.ui,
                    displayAddSubCard: true,
                },
            });
        default:
            return state;
    }
};

export default cardReducer;

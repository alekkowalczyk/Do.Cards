import { OtherAction } from "../../common";
import { CardActionDefs, CardActionConstants } from "../actions";
import { ICardModel } from "../model";

type CardAction =
    CardActionDefs.CardTitleChangedAction |
    CardActionDefs.ChangeCardTitleAction |
    OtherAction;

const cardReducer = (state: ICardModel, action: CardAction): ICardModel => {
    if (action.type !== CardActionConstants.CARD_ACTION) { return state; }
    switch (action.subType) {
        case CardActionConstants.CHANGE_CARD_TITLE:
            return {
                    ...state,
                    title: action.title,
            };
        case CardActionConstants.DISPLAY_ADD_SUB_CARD:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    displayAddSubCard: true,
                },
            };
        default:
            return state;
    }
};

export default cardReducer;
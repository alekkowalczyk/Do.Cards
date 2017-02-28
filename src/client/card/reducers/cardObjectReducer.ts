import { OtherAction } from "../../common";
import { CardActionDefs, CardActionConstants } from "../actions";
import { ICardProps } from "../model";

type CardAction =
    CardActionDefs.CardTitleChangedAction |
    CardActionDefs.ChangeCardTitleAction |
    OtherAction;

const cardReducer = (state: ICardProps, action: CardAction): ICardProps => {
    if (action.type !== CardActionConstants.CARD_ACTION) { return state; }
    switch (action.subType) {
        case CardActionConstants.CHANGE_CARD_TITLE:
            return {
                    ...state,
                    title: action.title,
            };
        case CardActionConstants.DISPLAY_EMPTY_SUB_CARD:
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

import { OtherAction } from "../../common";
import { CardGroupActionDefs, CardGroupActionConstants } from "../actions";
import { CardGroupModel } from "../model";

type CardGroupAction =
    CardGroupActionDefs.CardGroupTitleChangedAction |
    CardGroupActionDefs.ChangeCardGroupTitleAction |
    OtherAction;

const cardReducer = (state: CardGroupModel, action: CardGroupAction): CardGroupModel => {
    if (action.type !== CardGroupActionConstants.CARDGROUP_ACTION) { return state; }
    switch (action.subType) {
        case CardGroupActionConstants.CHANGE_CARDGROUP_TITLE:
            return new CardGroupModel({
                    ...state,
                    title: action.title,
            });
        case CardGroupActionConstants.FORCE_DISPLAY_ADD_CARD:
            return new CardGroupModel({
                ...state,
                ui: {
                    ...state.ui,
                    forceDisplayAddCard: true,
                },
            });
        default:
            return state;
    }
};

export default cardReducer;

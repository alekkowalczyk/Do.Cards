import { OtherAction } from "../../common";
import { CardGroupActionDefs, CardGroupActionConstants } from "../actions";
import { ICardGroupModel } from "../model";

type CardGroupAction =
    CardGroupActionDefs.CardGroupTitleChangedAction |
    CardGroupActionDefs.ChangeCardGroupTitleAction |
    OtherAction;

const cardReducer = (state: ICardGroupModel, action: CardGroupAction): ICardGroupModel => {
    if (action.type !== CardGroupActionConstants.CARDGROUP_ACTION) { return state; }
    switch (action.subType) {
        case CardGroupActionConstants.CHANGE_CARDGROUP_TITLE:
            return {
                    ...state,
                    title: action.title,
            };
        default:
            return state;
    }
};

export default cardReducer;

import { OtherAction } from "../../common";
import { CardModuleActionDefs, CardModuleActionConstants } from "../actions";
import { ICardModuleUI, getEmptyCardModuleUI } from "../model";

type CardModuleAction =
    CardModuleActionDefs.HoveringCardAction |
    OtherAction;

const INITIAL_STATE: ICardModuleUI = getEmptyCardModuleUI();

const cardGroupsReducer = (state: ICardModuleUI = INITIAL_STATE, action: CardModuleAction = OtherAction): ICardModuleUI => {
    switch (action.type) {
            case CardModuleActionConstants.HOVERING_CARD:
                return {
                    ...state,
                    hoveringCard: {
                        isHovering: action.isHovering,
                        hoverType: action.hoverType,
                        hoveringOver: action.cardId,
                    },
                };
            default:
                return state;
    }
};
export default cardGroupsReducer;

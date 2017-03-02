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
                if (action.hoverType !== "NONE") {
                    return {
                        ...state,
                        hoveringCard: {
                            hoverType: action.hoverType,
                            hoveringOver: action.hoveredOver,
                            hoveringCard: action.hoveringCard,
                        },
                    };
                }
                return {
                        ...state,
                        hoveringCard: {},
                    };
            default:
                return state;
    }
};
export default cardGroupsReducer;

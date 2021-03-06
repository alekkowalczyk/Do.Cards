import { OtherAction } from "../../common";
import cardsReducer from "./cardsReducer";
import cardGroupsReducer from "./cardGroupsReducer";
import cardModuleUiReducer from "./cardModuleUiReducer";
import { getEmptyCardModuleUI } from "../model/cardModuleUiModel";
import { IRootCardsModel } from "../model";

const INITIAL_STATE: IRootCardsModel = {
    moduleUI: getEmptyCardModuleUI(),
    cards: [],
    cardGroups: [],
};

const rootCardsReducer = (state: IRootCardsModel = INITIAL_STATE, action: OtherAction = OtherAction): IRootCardsModel => {
    const reducedState = {
        moduleUI: cardModuleUiReducer(state.moduleUI, action),
        cards: cardsReducer(state.cards, action),
        cardGroups: cardGroupsReducer(state.cardGroups, action),
    };
    return reducedState;
};
export default rootCardsReducer;
export { INITIAL_STATE };

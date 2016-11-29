import { OtherAction } from "../../common";
import cardsReducer from "./cardsReducer";
import cardGroupsReducer from "./cardGroupsReducer";
import { IRootCardsModel } from "../model";

const INITIAL_STATE: IRootCardsModel = {
    cards: [],
    cardGroups: [],
};

const rootCardsReducer = (state: IRootCardsModel = INITIAL_STATE, action: OtherAction = OtherAction): IRootCardsModel => {
    return {
        cards: cardsReducer(state.cards, action),
        cardGroups: cardGroupsReducer(state.cardGroups, action),
    };
};
export default rootCardsReducer;

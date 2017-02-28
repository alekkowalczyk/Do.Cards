import { OtherAction } from "../../common";
import cardsReducer from "./cardsReducer";
import cardGroupsReducer from "./cardGroupsReducer";
import { IRootCardsModel } from "../model";

const INITIAL_STATE: IRootCardsModel = {
    cards: [],
    //cardGroups: [getDefaultEmptyCardGroup()],
    cardGroups: [],
};

const rootCardsReducer = (state: IRootCardsModel = INITIAL_STATE, action: OtherAction = OtherAction): IRootCardsModel => {
    const cards = cardsReducer(state.cards, action);
    console.log(cards.map(c => c.title + ":" + c.order).join(","));
    const reducedState = {
        cards: cards,
        cardGroups: cardGroupsReducer(state.cardGroups, action),
    };
    return reducedState;
};
export default rootCardsReducer;
export { INITIAL_STATE };

import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { ICardGroupModel, ICardModel } from "../card/model";
import cardGroups from "../card/reducers/cardGroupReducer";
import cards from "../card/reducers/cardsReducer";

export type Store = {
    cardGroups: ICardGroupModel[],
    cards: ICardModel[],
};

export default combineReducers<Store>({
    cardGroups,
    cards,
    routing: routerReducer,
});

import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { IRootCardsModel } from "../card/model";
import cardsRoot from "../card/reducers/rootCardsReducer";

export type Store = {
    cardsRoot: IRootCardsModel,
};

export default combineReducers<Store>({
    cardsRoot,
    routing: routerReducer,
});

import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { CardGroupState } from "../state/card";
import cardList from "./cardListReducer";

export type Store = {
    cardList: CardGroupState,
};

export default combineReducers<Store>({
    cardList,
    routing: routerReducer,
});

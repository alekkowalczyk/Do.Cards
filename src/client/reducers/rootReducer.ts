import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { CardListModel } from "../model/card";
import cardList from "./cardListReducer";

export type Store = {
    cardList: CardListModel
};

export default combineReducers({
    cardList,
    routing: routerReducer,
});

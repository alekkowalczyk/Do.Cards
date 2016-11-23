import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { ICardGroupModel } from "../model/card";
import cardGroup from "./cardGroupReducer";

export type Store = {
    cardGroup: ICardGroupModel,
};

export default combineReducers<Store>({
    cardGroup,
    routing: routerReducer,
});

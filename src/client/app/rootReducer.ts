import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { ICardGroupModel } from "../card/model";
import cardGroup from "../card/reducers/cardGroupReducer";

export type Store = {
    cardGroup: ICardGroupModel,
};

export default combineReducers<Store>({
    cardGroup,
    routing: routerReducer,
});

import { OtherAction } from "../../common";
import { ICardGroupModel } from "../model";

type CardAction =
    OtherAction;

const INITIAL_STATE: ICardGroupModel[] = [];

const cardGroupReducer = (state: ICardGroupModel[] = INITIAL_STATE, action: CardAction = OtherAction): ICardGroupModel[] => {
    return state;
};

export default cardGroupReducer;

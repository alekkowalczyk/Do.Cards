import { QId } from "../../common";
import * as Constants from "./cardActionConstants";

export type CardAction = {
    type: Constants.CARD_ACTION,
    subType: string,
} & QId;

export type CardTitleChangedAction = {
            subType: Constants.CARD_TITLE_CHANGED,
            title: string,
        } & CardAction & QId;

export type ChangeCardTitleAction = {
            subType: Constants.CHANGE_CARD_TITLE,
            title: string,
        } & CardAction & QId;

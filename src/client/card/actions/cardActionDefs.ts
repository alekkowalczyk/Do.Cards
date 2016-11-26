import { QId } from "../../common";
import * as Constants from "./cardActionConstants";

export type AddCardAction = {
            type: Constants.ADD_CARD,
            title: string,
        };

export type CardTitleChangedAction = {
            type: Constants.CARD_TITLE_CHANGED,
            title: string,
        } & QId;

export type ChangeCardTitleAction = {
            type: Constants.CHANGE_CARD_TITLE,
            title: string,
        } & QId;


export type ArchiveCardAction = {
            type: Constants.ARCHIVE_CARD,
        } & QId;

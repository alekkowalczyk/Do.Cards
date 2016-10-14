import { QId } from "../baseActionConstants";
import * as Constants from "./cardConstants";

export type AddCardAction = {
            type: Constants.ADD_CARD,
            title: string,
        };

export type EditCardTitleAction = {
            type: Constants.EDIT_CARD_TITLE,
            title: string,
        } & QId;

export type ArchiveCardAction = {
            type: Constants.ARCHIVE_CARD,
        } & QId;

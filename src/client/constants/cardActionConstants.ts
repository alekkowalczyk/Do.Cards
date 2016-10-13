import { QId } from "./baseActionConstants";

export type ADD_CARD = "Card/ADD_CARD";
export const ADD_CARD: ADD_CARD = "Card/ADD_CARD";

export type EDIT_CARD_TITLE = "Card/EDIT_CARD_TITLE";
export const EDIT_CARD_TITLE: EDIT_CARD_TITLE = "Card/EDIT_CARD_TITLE";

export type ARCHIVE_CARD = "Card/ARCHIVE_CARD";
export const ARCHIVE_CARD: ARCHIVE_CARD = "Card/ARCHIVE_CARD";

export type AddCardAction = {
    type: ADD_CARD,
    title: string,
};

export type EditCardTitleAction = {
    type: EDIT_CARD_TITLE,
    title: string,
} & QId;

export type ArchiveCardAction = {
    type: ARCHIVE_CARD,
} & QId;

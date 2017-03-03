import { CardParentType, ICardId } from "../model/cardModel";
import * as Constants from "./cardActionConstants";

type QId = {
    id: ICardId
};

export type ArchiveCardAction = {
        type: Constants.ARCHIVE_CARD,
    } & QId;

// In cardActionConstants is explained, why it's not a CARD_ACTION
export type DisplayEmptyCardAboveAction = {
            type: Constants.DISPLAY_EMPTY_CARD_ABOVE,
        } & QId;

export type DisplayEmptyCardAtBottom = {
    type: Constants.DISPLAY_EMPTY_AT_BOTTOM,
    parentId: string,
    parentType: CardParentType,
};

export type MoveCardAction = {
    type: Constants.MOVE_CARD,
    parentId: string,
    parentType: CardParentType,
    order: number,
} & QId;

export type CardAction = {
    type: Constants.CARD_ACTION,
    subType: string,
} & QId;

// Actions for type CARD_ACTION (for a single card/card object actions)
export type CardTitleChangedAction = {
            subType: Constants.CARD_TITLE_CHANGED,
            title: string,
        } & CardAction & QId;

export type ChangeCardTitleAction = {
            subType: Constants.CHANGE_CARD_TITLE,
            title: string,
        } & CardAction & QId;

export type DisplayEmptySubCardAction = {
            subType: Constants.DISPLAY_EMPTY_SUB_CARD,
        } & CardAction & QId;

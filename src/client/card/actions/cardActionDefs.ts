import { CardParentType, ICardId } from "../model/cardModel";
import * as Constants from "./cardActionConstants";

type QId = {
    id: ICardId
};

// Main actions:
export type AddCardAction = {
    type: Constants.ADD_CARD,
    parentType: CardParentType,
    parentId: string,
    title: string,
};

export type ArchiveCardAction = {
        type: Constants.ARCHIVE_CARD,
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

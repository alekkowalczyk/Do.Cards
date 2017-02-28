import * as Constants from "./cardActionConstants";
import * as ActionDefs from "./cardActionDefs";
import { CardParentType, ICardId } from "../model/cardModel";

export function addCard(parentType: CardParentType, parentId: string, title: string): ActionDefs.AddCardAction {
    return {
        type: Constants.ADD_CARD,
        parentType: parentType,
        parentId: parentId,
        title: title,
    };
}

export function archiveCard(id: ICardId): ActionDefs.ArchiveCardAction {
    return {
        type: Constants.ARCHIVE_CARD,
        id: id,
    };
}

export function cardTitleChanged(id: ICardId, title: string): ActionDefs.CardTitleChangedAction {
    return {
        type: Constants.CARD_ACTION,
        subType: Constants.CARD_TITLE_CHANGED,
        id: id,
        title: title,
    };
}

export function changeCardTitle(id: ICardId, title: string): ActionDefs.ChangeCardTitleAction {
    return {
        type: Constants.CARD_ACTION,
        subType: Constants.CHANGE_CARD_TITLE,
        id: id,
        title: title,
    };
}

export function displayEmptySubCardAction(id: ICardId): ActionDefs.DisplayEmptySubCardAction {
    return {
        type: Constants.CARD_ACTION,
        subType: Constants.DISPLAY_EMPTY_SUB_CARD,
        id: id,
    };
}

export function displayEmptyCardAboveAction(id: ICardId): ActionDefs.DisplayEmptyCardAboveAction {
    return {
        type: Constants.DISPLAY_EMPTY_CARD_ABOVE,
        id: id,
    };
}

export function displayEmptyCardAtBottomAction(parentId: string, parentType: CardParentType): ActionDefs.DisplayEmptyCardAtBottom {
    return {
        type: Constants.DISPLAY_EMPTY_AT_BOTTOM,
        parentId: parentId,
        parentType: parentType,
    };
}

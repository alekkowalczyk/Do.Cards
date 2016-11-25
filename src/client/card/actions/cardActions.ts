import * as Constants from "./cardActionConstants";
import * as ActionDefs from "./cardActionDefs";

export function addCard(title: string): ActionDefs.AddCardAction {
    return {
        type: Constants.ADD_CARD,
        title: title,
    };
}

export function editCardTitle(id: string, title: string): ActionDefs.EditCardTitleAction {
    return {
        type: Constants.EDIT_CARD_TITLE,
        id: id,
        title: title,
    };
}

export function archiveCard(id: string): ActionDefs.ArchiveCardAction {
    return {
        type: Constants.ARCHIVE_CARD,
        id: id,
    };
}

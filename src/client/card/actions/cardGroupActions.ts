import * as Constants from "./cardGroupActionConstants";
import * as ActionDefs from "./cardGroupActionDefs";

export function addCard(title: string): ActionDefs.AddCardAction {
    return {
        type: Constants.ADD_CARD,
        title: title,
    };
}

export function archiveCard(id: string): ActionDefs.ArchiveCardAction {
    return {
        type: Constants.ARCHIVE_CARD,
        id: id,
    };
}

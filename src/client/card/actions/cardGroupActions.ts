import * as ActionDefs from "./cardGroupActionDefs";
import * as Constants from "./cardGroupActionConstants";

export function addCardGroup(title: string): ActionDefs.AddCardGroupAction {
    return {
        type: Constants.ADD_CARDGROUP,
        title: title,
    };
}

export function archiveCardGroup(id: string): ActionDefs.ArchiveCardGroupAction {
    return {
        type: Constants.ARCHIVE_CARDGROUP,
        id: id,
    };
}

export function cardGroupTitleChanged(id: string, title: string): ActionDefs.CardGroupTitleChangedAction {
    return {
        type: Constants.CARDGROUP_ACTION,
        subType: Constants.CARDGROUP_TITLE_CHANGED,
        id: id,
        title: title,
    };
}

export function changeCardGroupTitle(id: string, title: string): ActionDefs.ChangeCardGroupTitleAction {
    return {
        type: Constants.CARDGROUP_ACTION,
        subType: Constants.CHANGE_CARDGROUP_TITLE,
        id: id,
        title: title,
    };
}

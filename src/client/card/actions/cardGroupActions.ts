import * as ActionDefs from "./cardGroupActionDefs";
import * as Constants from "./cardGroupActionConstants";

export function addCardGroup(title: string, parentId?: string): ActionDefs.AddCardGroupAction {
    return {
        type: Constants.ADD_CARDGROUP,
        title: title,
        parentId: parentId,
    };
}

export function insertCardGroup(id: string, title: string, parentId?: string): ActionDefs.InsertCardGroupAction {
    return {
        type: Constants.INSERT_CARDGROUP,
        id: id,
        title: title,
        parentId: parentId,
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

export function forceDisplayAddCard(id: string): ActionDefs.ForceDisplayAddCardAction {
    return {
        type: Constants.CARDGROUP_ACTION,
        subType: Constants.FORCE_DISPLAY_ADD_CARD,
        id: id,
    };
}

 export function moveCardAction(id: string, parentId: string | undefined, order: number): ActionDefs.MoveCardGroupAction {
    return {
        type: Constants.MOVE_CARDGROUP,
        id: id,
        parentId: parentId,
        order: order,
    };
 }

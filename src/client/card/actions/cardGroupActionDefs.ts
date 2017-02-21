import { QId } from "../../common";
import * as Constants from "./cardGroupActionConstants";

// Main actions:
export type AddCardGroupAction = {
    type: Constants.ADD_CARDGROUP,
    title: string,
    parentId?: string,
};

export type InsertCardGroupAction = {
    type: Constants.INSERT_CARDGROUP,
    title: string,
    parentId?: string,
} & QId;

export type ArchiveCardGroupAction = {
            type: Constants.ARCHIVE_CARDGROUP,
        } & QId;

export type CardGroupAction = {
    type: Constants.CARDGROUP_ACTION,
    subType: string,
} & QId;


// Actions for type CARDGROUP_ACTION (for a single cardgroup/cardgroup object actions)
export type CardGroupTitleChangedAction = {
            subType: Constants.CARDGROUP_TITLE_CHANGED,
            title: string,
        } & CardGroupAction & QId;

export type ChangeCardGroupTitleAction = {
            subType: Constants.CHANGE_CARDGROUP_TITLE,
            title: string,
        } & CardGroupAction & QId;

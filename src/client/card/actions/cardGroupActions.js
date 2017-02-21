"use strict";
const Constants = require("./cardGroupActionConstants");
function addCardGroup(title, parentId) {
    return {
        type: Constants.ADD_CARDGROUP,
        title: title,
        parentId: parentId,
    };
}
exports.addCardGroup = addCardGroup;
function insertCardGroup(id, title, parentId) {
    return {
        type: Constants.INSERT_CARDGROUP,
        id: id,
        title: title,
        parentId: parentId,
    };
}
exports.insertCardGroup = insertCardGroup;
function archiveCardGroup(id) {
    return {
        type: Constants.ARCHIVE_CARDGROUP,
        id: id,
    };
}
exports.archiveCardGroup = archiveCardGroup;
function cardGroupTitleChanged(id, title) {
    return {
        type: Constants.CARDGROUP_ACTION,
        subType: Constants.CARDGROUP_TITLE_CHANGED,
        id: id,
        title: title,
    };
}
exports.cardGroupTitleChanged = cardGroupTitleChanged;
function changeCardGroupTitle(id, title) {
    return {
        type: Constants.CARDGROUP_ACTION,
        subType: Constants.CHANGE_CARDGROUP_TITLE,
        id: id,
        title: title,
    };
}
exports.changeCardGroupTitle = changeCardGroupTitle;
//# sourceMappingURL=cardGroupActions.js.map
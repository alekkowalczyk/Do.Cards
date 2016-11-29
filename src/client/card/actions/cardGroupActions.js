"use strict";
const Constants = require("./cardGroupActionConstants");
function addCardGroup(title) {
    return {
        type: Constants.ADD_CARDGROUP,
        title: title,
    };
}
exports.addCardGroup = addCardGroup;
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
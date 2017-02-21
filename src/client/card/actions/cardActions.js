"use strict";
const Constants = require("./cardActionConstants");
function addCard(parentType, parentId, title) {
    return {
        type: Constants.ADD_CARD,
        parentType: parentType,
        parentId: parentId,
        title: title,
    };
}
exports.addCard = addCard;
function archiveCard(id) {
    return {
        type: Constants.ARCHIVE_CARD,
        id: id,
    };
}
exports.archiveCard = archiveCard;
function cardTitleChanged(id, title) {
    return {
        type: Constants.CARD_ACTION,
        subType: Constants.CARD_TITLE_CHANGED,
        id: id,
        title: title,
    };
}
exports.cardTitleChanged = cardTitleChanged;
function changeCardTitle(id, title) {
    return {
        type: Constants.CARD_ACTION,
        subType: Constants.CHANGE_CARD_TITLE,
        id: id,
        title: title,
    };
}
exports.changeCardTitle = changeCardTitle;
//# sourceMappingURL=cardActions.js.map
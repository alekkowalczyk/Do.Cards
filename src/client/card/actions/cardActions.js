"use strict";
const Constants = require("./cardActionConstants");
function addCard(title) {
    return {
        type: Constants.ADD_CARD,
        title: title,
    };
}
exports.addCard = addCard;
function cardTitleChanged(id, title) {
    return {
        type: Constants.CARD_TITLE_CHANGED,
        id: id,
        title: title,
    };
}
exports.cardTitleChanged = cardTitleChanged;
function changeCardTitle(id, title) {
    return {
        type: Constants.CHANGE_CARD_TITLE,
        id: id,
        title: title,
    };
}
exports.changeCardTitle = changeCardTitle;
function archiveCard(id) {
    return {
        type: Constants.ARCHIVE_CARD,
        id: id,
    };
}
exports.archiveCard = archiveCard;
//# sourceMappingURL=cardActions.js.map
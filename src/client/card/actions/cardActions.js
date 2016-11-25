"use strict";
const Constants = require("./cardActionConstants");
function addCard(title) {
    return {
        type: Constants.ADD_CARD,
        title: title,
    };
}
exports.addCard = addCard;
function editCardTitle(id, title) {
    return {
        type: Constants.EDIT_CARD_TITLE,
        id: id,
        title: title,
    };
}
exports.editCardTitle = editCardTitle;
function archiveCard(id) {
    return {
        type: Constants.ARCHIVE_CARD,
        id: id,
    };
}
exports.archiveCard = archiveCard;
//# sourceMappingURL=cardActions.js.map
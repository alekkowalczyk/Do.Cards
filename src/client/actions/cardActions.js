"use strict";
const card_1 = require("../constants/card");
function addCard(title) {
    return {
        type: card_1.Constants.ADD_CARD,
        title: title,
    };
}
exports.addCard = addCard;
function editCardTitle(id, title) {
    return {
        type: card_1.Constants.EDIT_CARD_TITLE,
        id: id,
        title: title,
    };
}
exports.editCardTitle = editCardTitle;
function archiveCard(id) {
    return {
        type: card_1.Constants.ARCHIVE_CARD,
        id: id,
    };
}
exports.archiveCard = archiveCard;
//# sourceMappingURL=cardActions.js.map
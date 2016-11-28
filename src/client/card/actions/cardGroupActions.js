"use strict";
const Constants = require("./cardGroupActionConstants");
function addCard(title) {
    return {
        type: Constants.ADD_CARD,
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
//# sourceMappingURL=cardGroupActions.js.map
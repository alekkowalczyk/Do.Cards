"use strict";
const Constants = require("./cardActionConstants");
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
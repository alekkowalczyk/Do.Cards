"use strict";
const redux_saga_1 = require("redux-saga");
const effects_1 = require("redux-saga/effects");
const actions_1 = require("../actions");
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
function* handleCardTitleChanged(options) {
    yield effects_1.put(actions_1.Actions.changeCardTitle(options.id, options.title));
    yield effects_1.call(delay, 500);
    console.log("AJAX CALL!!!", options);
}
function* watchCardTitleChanged() {
    // will cancel current running handleInput task
    yield redux_saga_1.takeLatest(actions_1.ActionConstants.CARD_TITLE_CHANGED, handleCardTitleChanged);
}
;
function* rootSaga() {
    yield [
        watchCardTitleChanged(),
    ];
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rootSaga;
//# sourceMappingURL=cardSagas.js.map
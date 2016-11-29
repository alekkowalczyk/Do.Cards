"use strict";
const redux_saga_1 = require("redux-saga");
const effects_1 = require("redux-saga/effects");
const common_1 = require("../../common");
const actions_1 = require("../actions");
const { delay } = common_1.sagaUtils;
function* handleCardTitleChanged(options) {
    yield effects_1.put(actions_1.CardActions.changeCardTitle(options.id, options.title));
    yield effects_1.call(delay, 500);
    console.log("AJAX CALL!!!", options);
}
exports.handleCardTitleChanged = handleCardTitleChanged;
function* watchCardTitleChanged() {
    // will cancel current running handleInput task
    yield redux_saga_1.takeLatest(t => t.type === actions_1.CardActionConstants.CARD_ACTION && t.subType === actions_1.CardActionConstants.CARD_TITLE_CHANGED, handleCardTitleChanged);
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
"use strict";
const redux_saga_1 = require("redux-saga");
const effects_1 = require("redux-saga/effects");
const common_1 = require("../../common");
const actions_1 = require("../actions");
const { delay } = common_1.sagaUtils;
function* handleCardGroupTitleChanged(options) {
    yield effects_1.put(actions_1.CardGroupActions.changeCardGroupTitle(options.id, options.title));
    yield effects_1.call(delay, 500);
    console.log("AJAX CALL!!!", options);
}
exports.handleCardGroupTitleChanged = handleCardGroupTitleChanged;
function* watchCardGroupTitleChanged() {
    // will cancel current running handleInput task
    yield redux_saga_1.takeLatest(t => t.type === actions_1.CardGroupActionConstants.CARDGROUP_ACTION && t.subType === actions_1.CardGroupActionConstants.CARDGROUP_TITLE_CHANGED, handleCardGroupTitleChanged);
}
;
function* rootSaga() {
    yield [
        watchCardGroupTitleChanged(),
    ];
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rootSaga;
//# sourceMappingURL=cardGroupSagas.js.map
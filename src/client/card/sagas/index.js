"use strict";
const cardSagas_1 = require("./cardSagas");
const cardGroupSagas_1 = require("./cardGroupSagas");
function* rootSaga() {
    yield [
        cardSagas_1.default(),
        cardGroupSagas_1.default(),
    ];
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rootSaga;
//# sourceMappingURL=index.js.map
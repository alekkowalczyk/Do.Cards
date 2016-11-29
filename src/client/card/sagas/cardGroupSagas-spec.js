"use strict";
const cardGroupSagas_1 = require("./cardGroupSagas");
const common_1 = require("../../common");
const actions_1 = require("../actions");
const effects_1 = require("redux-saga/effects");
const chai = require("chai");
const { expect } = chai;
const { delay } = common_1.sagaUtils;
describe("cardGroupSagas", () => {
    describe("handleCardGroupTitleChanged", () => {
        const generator = cardGroupSagas_1.handleCardGroupTitleChanged({ id: "fakeId", title: "fakeTitle" });
        it("dispatches CHANGE_CARDGROUP_TITLE actions", () => {
            expect(generator.next().value).to.deep.equal(effects_1.put(actions_1.CardGroupActions.changeCardGroupTitle("fakeId", "fakeTitle")));
        });
        it("waits 500 milliseconds", () => {
            expect(generator.next().value).to.deep.equal(effects_1.call(delay, 500));
        });
    });
});
//# sourceMappingURL=cardGroupSagas-spec.js.map
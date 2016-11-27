"use strict";
const cardSagas_1 = require("./cardSagas");
const actions_1 = require("../actions");
const effects_1 = require("redux-saga/effects");
const chai = require("chai");
const expect = chai.expect;
describe("cardSagas", () => {
    describe("handleCardTitleChanged", () => {
        const generator = cardSagas_1.handleCardTitleChanged({ id: "fakeId", title: "fakeTitle" });
        it("dispatches CHANGE_CARD_TITLE actions", () => {
            expect(generator.next().value).to.deep.equal(effects_1.put(actions_1.Actions.changeCardTitle("fakeId", "fakeTitle")));
        });
        it("waits 500 milliseconds", () => {
            expect(generator.next().value).to.deep.equal(effects_1.call(cardSagas_1.delay, 500));
        });
    });
});
//# sourceMappingURL=cardSagas-spec.js.map
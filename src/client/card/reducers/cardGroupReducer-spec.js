"use strict";
const cardGroupReducer_1 = require("./cardGroupReducer");
const cardActions = require("../actions/cardActions");
const chai = require("chai");
const expect = chai.expect;
describe("cardGroupReducer", () => {
    describe("ADD_CARD dispatched", () => {
        it("initial state contains added card", () => {
            const testTitle = "some title";
            const state = cardGroupReducer_1.default(undefined, cardActions.addCard(testTitle));
            expect(state.cards).to.have.length(1);
            expect(state.cards[0].title).to.equal(testTitle);
        });
    });
    describe("ARCHIVE_CARD dispatched", () => {
        it("state doesnt contain removed card", () => {
            const testId = "1";
            const initialstate = {
                cards: [{
                        id: testId,
                        title: "some title",
                        status: "OK",
                    }],
            };
            const state = cardGroupReducer_1.default(initialstate, cardActions.archiveCard(testId));
            expect(state.cards).to.have.length(0);
        });
    });
});
//# sourceMappingURL=cardGroupReducer-spec.js.map
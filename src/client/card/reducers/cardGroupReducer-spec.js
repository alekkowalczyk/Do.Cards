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
    describe("CHANGE_CARD_TITLE dispatched", () => {
        it("set's the new title in the card", () => {
            const initialstate = {
                cards: [{
                        id: "0",
                        title: "some title0",
                        status: "OK",
                    },
                    {
                        id: "1",
                        title: "some title1",
                        status: "OK",
                    },
                    {
                        id: "2",
                        title: "some title2",
                        status: "OK",
                    }],
            };
            const expectedState = {
                cards: [{
                        id: "0",
                        title: "some title0",
                        status: "OK",
                    },
                    {
                        id: "1",
                        title: "some title1 - CHANGED",
                        status: "OK",
                    },
                    {
                        id: "2",
                        title: "some title2",
                        status: "OK",
                    }],
            };
            const resultingState = cardGroupReducer_1.default(initialstate, cardActions.changeCardTitle("1", "some title1 - CHANGED"));
            expect(resultingState).to.deep.equal(expectedState);
        });
    });
});
//# sourceMappingURL=cardGroupReducer-spec.js.map
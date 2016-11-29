"use strict";
const cardsReducer_1 = require("./cardsReducer");
const actions_1 = require("../actions");
const chai = require("chai");
const expect = chai.expect;
describe("cardsReducer", () => {
    describe("ADD_CARD dispatched", () => {
        it("initial state contains added card", () => {
            const testTitle = "some title";
            const state = cardsReducer_1.default(undefined, actions_1.CardActions.addCard("1", testTitle));
            expect(state).to.have.length(1);
            expect(state[0].title).to.equal(testTitle);
        });
    });
    describe("ARCHIVE_CARD dispatched", () => {
        it("state doesnt contain removed card", () => {
            const testId = "1";
            const initialstate = [{
                    id: testId,
                    cardGroupId: "1",
                    title: "some title",
                    status: "OK",
                }];
            const state = cardsReducer_1.default(initialstate, actions_1.CardActions.archiveCard(testId));
            expect(state).to.have.length(0);
        });
    });
    describe("CHANGE_CARD_TITLE dispatched", () => {
        it("set's the new title in the card by passing the action to the cardObjectReducer", () => {
            const initialstate = [{
                    id: "0",
                    cardGroupId: "1",
                    title: "some title0",
                    status: "OK",
                },
                {
                    id: "1",
                    cardGroupId: "1",
                    title: "some title1",
                    status: "OK",
                },
                {
                    id: "2",
                    cardGroupId: "1",
                    title: "some title2",
                    status: "OK",
                }];
            const expectedState = [{
                    id: "0",
                    cardGroupId: "1",
                    title: "some title0",
                    status: "OK",
                },
                {
                    id: "1",
                    cardGroupId: "1",
                    title: "some title1 - CHANGED",
                    status: "OK",
                },
                {
                    id: "2",
                    cardGroupId: "1",
                    title: "some title2",
                    status: "OK",
                }];
            const resultingState = cardsReducer_1.default(initialstate, actions_1.CardActions.changeCardTitle("1", "some title1 - CHANGED"));
            expect(resultingState).to.deep.equal(expectedState);
        });
    });
});
//# sourceMappingURL=cardsReducer-spec.js.map
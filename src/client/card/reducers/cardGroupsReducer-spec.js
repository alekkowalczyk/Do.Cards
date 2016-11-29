"use strict";
const cardGroupsReducer_1 = require("./cardGroupsReducer");
const actions_1 = require("../actions");
const chai = require("chai");
const { expect } = chai;
describe("cardGroupsReducer", () => {
    describe("ADD_CARDGROUP dispatched", () => {
        it("initial state contains added cardgroup", () => {
            const testTitle = "some title";
            const state = cardGroupsReducer_1.default(undefined, actions_1.CardGroupActions.addCardGroup(testTitle));
            expect(state).to.have.length(1);
            expect(state[0].title).to.equal(testTitle);
        });
    });
    describe("ARCHIVE_CARDGROUP dispatched", () => {
        it("state doesnt contain removed cardgroup", () => {
            const testId = "1";
            const initialstate = [{
                    id: testId,
                    title: "some title",
                    status: "OK",
                }];
            const state = cardGroupsReducer_1.default(initialstate, actions_1.CardGroupActions.archiveCardGroup(testId));
            expect(state).to.have.length(0);
        });
    });
    describe("CHANGE_CARDGROUP_TITLE dispatched", () => {
        it("set's the new title in the cardgroup by passing the action to the cardGroupObjectReducer", () => {
            const initialstate = [{
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
                }];
            const expectedState = [{
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
                }];
            const resultingState = cardGroupsReducer_1.default(initialstate, actions_1.CardGroupActions.changeCardGroupTitle("1", "some title1 - CHANGED"));
            expect(resultingState).to.deep.equal(expectedState);
        });
    });
});
//# sourceMappingURL=cardGroupsReducer-spec.js.map
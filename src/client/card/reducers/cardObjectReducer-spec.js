"use strict";
const cardObjectReducer_1 = require("./cardObjectReducer");
const actions_1 = require("../actions");
const chai = require("chai");
const expect = chai.expect;
describe("cardReducer", () => {
    describe("CHANGE_CARD_TITLE dispatched", () => {
        it("set's the new title in the card", () => {
            const initialstate = {
                id: "1",
                cardGroupId: "1",
                title: "some title1",
                status: "OK",
            };
            const expectedState = {
                id: "1",
                cardGroupId: "1",
                title: "some title1 - CHANGED",
                status: "OK",
            };
            const resultingState = cardObjectReducer_1.default(initialstate, actions_1.CardActions.changeCardTitle("1", "some title1 - CHANGED"));
            expect(resultingState).to.deep.equal(expectedState);
        });
    });
});
//# sourceMappingURL=cardObjectReducer-spec.js.map
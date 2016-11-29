"use strict";
const cardGroupObjectReducer_1 = require("./cardGroupObjectReducer");
const actions_1 = require("../actions");
const chai = require("chai");
const expect = chai.expect;
describe("cardGroupObjectReducer", () => {
    describe("CHANGE_CARDGROUP_TITLE dispatched", () => {
        it("set's the new title in the cardgroup", () => {
            const initialstate = {
                id: "1",
                title: "some title1",
                status: "OK",
            };
            const expectedState = {
                id: "1",
                title: "some title1 - CHANGED",
                status: "OK",
            };
            const resultingState = cardGroupObjectReducer_1.default(initialstate, actions_1.CardGroupActions.changeCardGroupTitle("1", "some title1 - CHANGED"));
            expect(resultingState).to.deep.equal(expectedState);
        });
    });
});
//# sourceMappingURL=cardGroupObjectReducer-spec.js.map
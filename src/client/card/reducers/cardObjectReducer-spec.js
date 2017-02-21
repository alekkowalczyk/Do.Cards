"use strict";
const model_1 = require("../model");
const cardObjectReducer_1 = require("./cardObjectReducer");
const actions_1 = require("../actions");
const chai = require("chai");
const expect = chai.expect;
describe("cardObjectReducer", () => {
    describe("CHANGE_CARD_TITLE dispatched", () => {
        it("set's the new title in the card", () => {
            const cardId = {
                id: "1",
                parentType: model_1.CardParent_CardGroup,
                parentId: "1",
            };
            const initialstate = {
                id: cardId,
                title: "some title1",
                status: "OK",
            };
            const expectedState = {
                id: cardId,
                title: "some title1 - CHANGED",
                status: "OK",
            };
            const resultingState = cardObjectReducer_1.default(initialstate, actions_1.CardActions.changeCardTitle(cardId, "some title1 - CHANGED"));
            expect(resultingState).to.deep.equal(expectedState);
        });
    });
});
//# sourceMappingURL=cardObjectReducer-spec.js.map
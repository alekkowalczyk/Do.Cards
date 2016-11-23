import { ICardGroupModel } from "../../../../src/client/model/card";
import cardGroupReducer from "../../../../src/client/reducers/cardGroupReducer";
import * as cardActions from "../../../../src/client/actions/cardActions";

import * as chai from "chai";
const expect = chai.expect;

describe("cardGroupReducer", () => {
    describe("ADD_CARD dispatched", () => {
        it("initial state contains added card", () => {
            const testTitle = "some title";
            const state = cardGroupReducer(undefined, cardActions.addCard(testTitle))
            expect(state.cards).to.have.length(1);
            expect(state.cards[0].title).to.equal(testTitle);
        });
    });

    describe("ARCHIVE_CARD dispatched", () => {
        it("state doesnt contain removed card", () => {
            const testId = "1";
            const initialstate: ICardGroupModel = {
                cards: [{
                    id: testId,
                    title: "some title",
                    status: "OK",
                }],
            };
            const state = cardGroupReducer(initialstate, cardActions.archiveCard(testId));
            expect(state.cards).to.have.length(0);
        });
    });
});

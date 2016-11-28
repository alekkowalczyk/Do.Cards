import { ICardGroupModel } from "../model/cardGroupModel";
import cardGroupReducer from "./cardGroupReducer";
import { CardGroupActions, CardActions } from "../actions";

import * as chai from "chai";
const expect = chai.expect;

describe("cardGroupReducer", () => {
    describe("ADD_CARD dispatched", () => {
        it("initial state contains added card", () => {
            const testTitle = "some title";
            const state = cardGroupReducer(undefined, CardGroupActions.addCard(testTitle))
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
            const state = cardGroupReducer(initialstate, CardGroupActions.archiveCard(testId));
            expect(state.cards).to.have.length(0);
        });
    });

    describe("CHANGE_CARD_TITLE dispatched", () => {
        it("set's the new title in the card by passing the action to the cardReducer", () => {
            const initialstate: ICardGroupModel = {
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
            const expectedState: ICardGroupModel = {
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
            const resultingState = cardGroupReducer(initialstate, CardActions.changeCardTitle("1", "some title1 - CHANGED"));
            expect(resultingState).to.deep.equal(expectedState);
        });
    });
});
